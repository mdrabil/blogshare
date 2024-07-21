import mongoose from "mongoose";
import { type } from "os";

const usershcema = new mongoose.Schema({

username:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
},
cpassword:{
    type:String,
    required:true,
}



})

export default mongoose.model("user",usershcema)