import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewURLParser:true,
            useUnifiedTopology:true,
        })
        console.log("MongoDB connected");
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
export default connectDB