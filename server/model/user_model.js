const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        // Corrected from 'firtName'
        type: String,
        required: true,
    },
    lastName: String,
    email: String,
    phoneNumber: Number, // Corrected casing from 'phonenumber'
    dob: Date,
    gender: {
        type: String, // Added type
        enum: ['male', 'female', 'other'], // Corrected syntax and quotes
    },
    bloodGroup: String, // Corrected casing
    address: String,
    city: String,
    state: String,
    pincode: Number,
    department: {
        type: String, // Added type
        enum: ['IT', 'HR', 'Marketing'], // Corrected from 'emum'
    },
    position: String, // Corrected from 'positoin'
    joiningDate: Date, // Corrected casing
    employmentType: String, // Corrected casing
    salary: Number,
    reportingManager: String,
});

const UserModel = mongoose.model('User', UserSchema); // Standard model name
module.exports = UserModel;
