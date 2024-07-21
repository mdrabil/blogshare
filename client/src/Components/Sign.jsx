import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'


const Sign = () => {
const navigate = useNavigate()

  const [username,setusername] = useState()
  const [email,setemail] = useState()
  const [password,setpassword] = useState()
  const [cpassword,setcpassword] = useState()

const submitform =async (e)=>{
e.preventDefault()

await axios.post('http://localhost:5000/sign',{username,email,password,cpassword})
.then(result=>{
if(result.data=="user"){
  toast.success("USER SUCCESSFULL",{position:"bottom-center"})
navigate('/post')
}
else{
  toast.success(result.data.msg,{position:"bottom-center"})

}


}).catch(()=>{
  alert("not user")
})



}




  return (
    <div>
      <section className="sign-box">
  <div className="login">
    <form  onSubmit={submitform}>

    <h1>sign in <hr /></h1>
    <label htmlFor="username">username<span>*</span></label>
    <div className="input-box">
    <i class="ri-user-line"></i>
    <input type="text"
     placeholder='username'
      name='username'
 onChange={(e)=>{setusername(e.target.value)}}
       id='username' />
    </div>
    <label htmlFor="email">email<span>*</span></label>
    <div className="input-box">
    <i class="ri-mail-fill"></i>
    <input type="email" placeholder=' your email'
     name='email' id='email'
     onChange={(e)=>{setemail(e.target.value)}}
      />

    </div>
    <label htmlFor="password">password<span>*</span></label>
    <div className="input-box">
    <i class="ri-key-fill"></i>
    <input type="password" placeholder=' your password'
     name='password' id='password' 
     onChange={(e)=>{setpassword(e.target.value)}}
     />
    </div>
    <label htmlFor="cpassword">conform password<span>*</span></label>
    <div className="input-box">
    <i class="ri-user-line"></i>
    <input type="password" placeholder='conform password' 
    name='cpassword' id='cpasword'
    onChange={(e)=>{setcpassword(e.target.value)}}
    />
    </div>
 <input type="submit" value="sign up now" id='submit'/>
 <div className="login-user">
  <Link to={'/post'}>
  <h6>already user</h6>
  </Link>
 </div>
    </form>
  </div>
</section>
    </div>
  )
}

export default Sign