import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import User from './models/usershcema.js'
import bcrypt from 'bcrypt'
import Post from './models/post.js'
import post from './models/post.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())


mongoose.connect(process.env.URL).then(()=>{
    console.log("db is connected")
}).catch(()=>{
    console.log("db error")
})

app.post('/sign',async (req,res)=>{
    const {username,email,password,cpassword} = req.body;

   if(!username || !email || !password || !cpassword){
    return res.json({status:400,msg:"fill the all filed"})
   }
{

const check = await User.findOne({email:email})
 if(!check){

    if(password==cpassword){
try {
    
const hashpass = await bcrypt.hash(password,10)
const data = {
    username:username,
    email:email,
    password:hashpass,
    cpassword:hashpass
}

const mydata = await User.create(data)

mydata.save()
return res.json("user")

} catch (error) {
    
    return res.json({status:400,msg:"user not found"})

}




    }
else
    {
        return res.json({status:400,msg:"password is not same"}) 
    }


 }
 else
 {
    return res.json({status:400,msg:"user already exist"})
 }



}


})


app.post('/post',async (req,res)=>{

    const {username,password,post} = req.body;

const check = await User.findOne({username:username})

if(check)
{

   const matchpass =  await bcrypt.compare(password,check.password)

if(matchpass){
    const hash = await bcrypt.hash(password,10)
const postdata = {
    username:username,
    password:hash,
    post:post
}
const data = await Post.create(postdata)

data.save()
return res.json("post")


}

else {
    return res.json({status:400,msg:"user invalid"})
}
}
else{
    return res.json({status:400,msg:"user not found"})
}


})

app.get('/get',async (req,res)=>{

    try {

const check = await Post.find()

if(check){
return res.json(check)
}
else{
    return res.json({status:404,msg:"user not found"})

}

        
    } catch (error) {
        return res.json({status:404,msg:"user not found"})
    }
})


app.get("/getone/:id",async (req,res)=>{
    try {
    const id = req.params.id

 
    const check = await Post.findById(id)
if(check){
  
    return res.json(check)
}
else{
    return res.json({msg:"error"})
}
    
} catch (error) {
    return res.json({msg:"error"})
}
})

app.put('/update/:id',async(req,res)=>{
    try {
        const id = req.params.id

const check = await post.findById(id)

if(check){

    await Post.findByIdAndUpdate({_id:id},req.body,{new:true})
return res.json("update")


}
else{
    return res.json({msg:"user not found"})
}
    } catch (error) {
        
    }
})

app.delete('/delete/:id',async(req,res)=>{
    try {
        
const id = req.params.id
console.log(id)
const check = await Post.findById(id)


if(check){
    await Post.findByIdAndDelete(id)
    return res.json("delete")
}
else{
    return res.json("user not found")
}


    } catch (error) {
        
    }
})


app.post('/password/:id',async(req,res)=>{

    const {password} = req.body
    const id = req.params.id

    try {

const check = await Post.findById(id)


if(check){
    const matchpas =await bcrypt.compare(password,check.password)
    
    
    if(matchpas == password){
        
        return res.json("user")
    }
    else{
        return res.json({msg:"user not found"})
    }
}
return res.json({msg:"user not found"})

        
    } catch (error) {
        
    }
})




app.listen(process.env.PORT,()=>{
    console.log("server is runing on ",process.env.PORT)
})