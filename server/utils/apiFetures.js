class APIFeatures {
    constructor(query, queryString) {
        this.query = query; // Mongoose query
        this.queryString = queryString; // req.query
        this.filterQuery = {}; // store filters for later use
    }

    filter() {
        // Copy query object
        const queryObj = { ...this.queryString };

        // Fields to exclude from filtering
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach((el) => delete queryObj[el]);

        // Advanced filtering (gte, gt, lte, lt)
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`,
        );

        // Convert string back to object
        this.filterQuery = JSON.parse(queryStr);

        // 🔎 Custom search
        if (this.queryString.search) {
            this.filterQuery.$or = [
                {
                    firstName: {
                        $regex: this.queryString.search,
                        $options: 'i',
                    },
                },
                {
                    lastName: {
                        $regex: this.queryString.search,
                        $options: 'i',
                    },
                },
                { email: { $regex: this.queryString.search, $options: 'i' } },
            ];
        }

        // Apply to mongoose query
        this.query = this.query.find(this.filterQuery);

        return this; // allow chaining
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }
        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v');
        }
        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}

module.exports = APIFeatures;
