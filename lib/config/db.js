import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://blog:2t2WxpCmIlAOa18A@cluster0.sulvccf.mongodb.net/next-todo');
    console.log("DB Connected");
}