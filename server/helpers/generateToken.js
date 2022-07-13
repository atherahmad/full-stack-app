import jwt from "jsonwebtoken";

export const generateToken = (payload) => {

    // to generate a good jwt secret use:
    //require("crypto").randomBytes(64).toString("Hex")

    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: 10800
    })
}