import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Post = () => {
  const navigate = useNavigate()
const [username,setusername]= useState()
  const [password,setpassword] = useState()
  const [post ,setpost] = useState()

const submitform =async(e)=>{
e.preventDefault()

await axios.post('http://localhost:5000/post',{username,password,post})
.then((result)=>{

  if(result.data=="post"){
    toast.success("POST IS BOOST",{position:'bottom-center'})
  navigate('/blog')
  }
else{
  toast.error(result.data.msg,{position:"bottom-center"})
}
}).catch(()=>{

})



}



  return (
    <div>
      <section className="sign-box">
 <form onSubmit={submitform}>

 <div className="login">
    <h1> post<hr /></h1>
    <br />
    <label htmlFor="username">id<span>*</span></label>
    <div className="input-box">
    <i class="ri-user-line"></i>
    <input type="text" placeholder='username or email'
     name='username'
     onChange={(e)=>{
      setusername(e.target.value)
     }}
      id='username' />
    </div>
  <br />
    <label htmlFor="password">password<span>*</span></label>
    <div className="input-box">
    <i class="ri-key-fill"></i>
    <input type="password" placeholder=' your password' 
      onChange={(e)=>{
        setpassword(e.target.value)
       }}
    name='password' id='password' />
    </div>

   <br />
   <label htmlFor="username">post<span>*</span></label>
    <div className="input-box">
  <textarea name="post" rows={4}
  minLength={20}
    onChange={(e)=>{
      setpost(e.target.value)
     }}
  id="username"></textarea>
    </div>
 <input type="submit" value="boost blog"  id='submit'/>
 <div className="login-user">
  <Link to={'/Sign'}>
  <h6>new user</h6>
  </Link>
 </div>
  </div>
 </form>
</section>
    </div>
  )
}

export default Post