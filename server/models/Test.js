import mongoose from "mongoose";

const test = new mongoose.Schema({
    name:{
        type :String,
        required : true
    },
    date: {
        type: Date,
        default : new Date()}
})

const Test = mongoose.model("Test", test)

export default Test;