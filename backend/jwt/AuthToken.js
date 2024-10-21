import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const createTokenAndSaveCookies = async (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "70d" });
    const options = {
        expires: new Date(Date.now() + 70 * 24 * 60 * 60 * 1000),
}

    res.cookie("jwt", token, options, {
        httpOnly: false, //xss
        sameSite: "none", //csrf
        secure: true
    });
    await User.findByIdAndUpdate(userId, { token: token });
    return token;
}

export default createTokenAndSaveCookies;
