import User from "../models/User.js";
import bcrypt from "bcryptjs";
import emailSender from "../helpers/emailConfirmation.js";
import jwt from "jsonwebtoken";
import { generateToken } from "../helpers/generateToken.js";

export const signup = (req, res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body;

    if(password !== confirmPassword) return res.status(400).json({message: "Password dont match"})

    User.findOne({email}, async (err, doc)=>{
        if(err) res.status(500).json(err.message)
        else{
            if(doc) res.status(400).json({message: "Email already registered"})
            else {
                const hashPassword =  await bcrypt.hash(password, 10)
                const user = new User({
                    email,
                    password: hashPassword,
                    fullName: firstName + " " + lastName,
                    id: (firstName+lastName).toLowerCase()
                })
                user.save((err, doc)=>{
                    if(err) return res.status(500).json({message: "Please try again"})
                    emailSender(email)
                    res.status(201).json(doc)
                })
            }
        }
    })

}

export const login = async (req, res) => {

    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({message: "Invalid Credentials"})

    const passwordCorrect = await bcrypt.compare(password, user.password)
    if(!passwordCorrect) return res.status(400).json({message: "Invalid credentials"})
    const token = generateToken({
        id: user.id,
        fullName : user.fullName

    })
    res.status(200).json({
        token, 
        user: {
            id: user.id,
            fullName: user.fullName
    }})
}