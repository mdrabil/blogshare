import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Password from './Password'
const Edit = () => {
const navigate = useNavigate()

const [post,setpost]= useState([])


const {id} = useParams()

useEffect(()=>{
const data = async()=>{


const getdata = await axios.get(`http://localhost:5000/getone/${id}`)
if(getdata)

setpost(getdata.data)


}

data()
},[id])
const handlepost = (e)=>{
    const {post ,value} = e.target
setpost({...post,[post]:value})


}



const submitform =async(e)=>{
e.preventDefault()

await axios.put(`http://localhost:5000/update/${id}`)
.then((result)=>{

  if(result.data=="update"){
    toast.success("ubdated",{position:'bottom-center'})
  navigate('/')
  }
else{
  toast.error(result.data.msg,{position:"bottom-center"})
}
}).catch(()=>{

})



}



  return (
    <div>
<Password/>
      <section className="sign-box">


 <form onSubmit={submitform}>

 <div className="login">
    <h1>update<hr /></h1>
    <br />
  
   <br />
   <label htmlFor="username">post<span>*</span></label>
    <div className="input-box">
  <textarea name="post" rows={4}
  minLength={20}
  onChange={handlepost}
value={post.post}
  id="username"></textarea>
    </div>
 <input type="submit" value="update now"  id='submit'/>
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

export default Edit