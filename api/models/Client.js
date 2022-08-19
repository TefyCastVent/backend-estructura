import mongoose from "mongoose";

const schema = new mongoose.Schema ({
    name: String,
    birth: Date,
    age: Number,
    adress: String,
    email: String,
    phoneNumber: String,
    references: [{nameR: String, phoneNumberR: String }]
})

export default mongoose.model('Client', schema)