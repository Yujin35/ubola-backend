
const UserModel = require('../model/UserModel');

const register = async (req, res) => {
    try {
        const user_mobile = req.body.mobile;

        const user = new UserModel({
            mobile: user_mobile,
            dateCreate: Date().toString()
        });

        const checkUser = await UserModel.findOne({ 'mobile': user_mobile });

        console.log(checkUser);

        if (!checkUser) {
            const userData = await user.save();

            if (userData) {
                res.status(200).send({ success: true, msg: 'Новый пользователь добавлен', data: userData });
            } else {
                res.status(200).send({ success: false, msg: 'Ошибка в добавлении пользователя', data: userData });
            }
        } else {
            res.status(200).send({ success: false, msg: 'Пользователь с таким телефоном уже существует' });
        }

    } catch (error) {
        res.status(400).send({ success: false, msg: error.massege });
    }
}

const login = async (req, res) => {
    try {
        const user_mobile = req.body.mobile;

        const checkUser = await UserModel.findOne({ 'mobile': user_mobile });

        console.log(checkUser);

        if (checkUser) {
            res.status(200).send({ success: true, msg: 'Вы вошли в аккаунт' });
        } else {
            res.status(200).send({ success: false, msg: 'Ошибка при входе в аккаунт' });
        }

    } catch (error) {
        res.status(400).send({ success: false, msg: error.massege });
    }
}

module.exports = {
    register,
    login
}