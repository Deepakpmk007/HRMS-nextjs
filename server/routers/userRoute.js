const Router = require('express');
const catchAsync = require('../utils/catchAsync');
const {
    getAllUser,
    createUser,
    deleteById,
} = require('../controllers/userController');

const router = Router();

router.route('/').get(getAllUser).post(createUser);

router.route('/:id').delete(deleteById);

module.exports = router;
