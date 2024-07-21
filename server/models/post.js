import mongoose from "mongoose";
import { type } from "os";

const usershcema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    
    post:{
        type:String,
        required:true
    },
    



})

export default mongoose.model("post",usershcema)