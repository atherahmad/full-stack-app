import Test from "../models/Test.js";

export const testController = (req, res) => res.json("success")

export const storeData = (req, res) =>  {

    const { name } = req.body;

    const newTest = new Test({
        name
    })

    newTest.save((err, doc)=>{
        if(err) res.status(409).json({message : err.message})
        else res.status(201).json(doc)
    })
}

