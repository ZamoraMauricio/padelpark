const { response, request } = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const validateJWT = (req = request, res = response, next) => {
    const token = req.header("Authorization");
    if (!token) {
        res.status(401).json({
            message: "Invalid token"
        });
        return;
    }

    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);

        User.findOne({ _id: id }).then((result) => {
            if (result) {
                req.userActive = result;
                next();
            } else {
                res.status(401).json({
                    message: "Invalid token"
                });
                return;
            }
        }).catch(() => {
            res.status(500).json({
                message: "Error"
            });
            return;
        });

    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        });
        return;
    }
}

module.exports = {
    validateJWT,
}
