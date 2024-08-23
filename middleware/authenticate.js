import { compare } from "bcrypt";
import { getUserDbByEmail } from "../model/usersDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()

const checkUser = async (req, res, next) => {
    const {emailAdd, userPass} = req.body;
    console.log(emailAdd);
    let hashedPassword = (await getUserDbByEmail(emailAdd)).userPass;
    let result = await compare(userPass, hashedPassword);
    if (result==true) {
        let token = jwt.sign({emailAdd: emailAdd}, process.env.SECRET_KEY, {expiresIn: '1h'})
        console.log(token);
        req.body.token = token
        next()
        return
    } else {
        res.send('Invalid password')
    }
}



export { checkUser }

