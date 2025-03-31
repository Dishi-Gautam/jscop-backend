import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  college: { type: String, required: true, enum: ["JIIT-62", "JIIT-128", "others"] },
  othercollege: { 
    type: String, 
    required: function () { return this.college === "others"; }, 
    default: null 
  }
});

const User = mongoose.model("User", userSchema);
export default User;