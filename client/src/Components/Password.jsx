import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const Password = () => {
    const {id} = useParams()
    
    const [password,setpassword] = useState()
    const [color,setcolor] = useState("initaial")
    const submitform = (e)=>{
    e.preventDefault()

axios.post(`http://localhost:5000/password/${id}`,{password}).then((result)=>{

if(result.data="user"){
    toast.success("user is successs",{position:"bottom-center"})
setcolor("none")
}

else{
    toast.error(result.data.msg,{position:"bottom-center"})
}
})


}
  return (
    <div>
<section className="password-box" style={{display:color}}>
    <div className="password">
        <form onSubmit={submitform}>
        <label htmlFor="password">password<span>*</span></label>
    <div className="input-box">

    <input type="password" placeholder=' your password'
     name='password' id='password' 
     onChange={(e)=>{setpassword(e.target.value)}}
     />
    <input type="submit" name="" className='password-btn' />
    </div>
        </form>
    </div>
</section>


    </div>
  )
}

export default Password