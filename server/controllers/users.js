const User = require('../models/user');
const { generateJWT } = require('../helpers/jwt');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ email: email, password: hashedPassword });

        newUser.save();

        const token = await generateJWT(newUser._id);

        console.log(token);

        res.status(201).json(
            { 
                message: 'User registered successfully',
                token: token 
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            message: "Error. Not found."
        });
        return;
    }

    try {
        const user = await User.findOne({ email });

        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);

            if (validPassword) {
                const token = await generateJWT(user._id);
                console.log(token);
                res.status(200).json({
                    token: token,
                });
            } else {
                res.status(401).json({
                    message: "Incorrect password"
                });
            }
        } else {
            res.status(401).json({
                message: "User not found"
            });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerUser,
    login
};