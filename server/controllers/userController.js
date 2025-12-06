const UserModel = require('../model/user_model');
const catchAsync = require('../utils/catchAsync');

exports.getAllUser = catchAsync(async (req, res) => {
    const userData = await UserModel.find();
    res.status(200).json({
        message: 'Ok',
        length: userData.length,
        data: userData,
    });
});

exports.createUser = catchAsync(async (req, res) => {
    const newUser = await UserModel.create(req.body);
    res.status(200).json({
        status: 'success',
        data: newUser,
        message: 'New User created',
    });
});

exports.deleteById = catchAsync(async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: 'success',
        message: 'User deleted',
    });
});
