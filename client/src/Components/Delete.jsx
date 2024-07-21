import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import Password from './Password'
const Delete = () => {

    const navigate = useNavigate()
    const {id} = useParams()

    const [deleted,setdeleted] = useState([])

useEffect(()=>{

    const getdata =async ()=>{
       const data = await axios.get(`http://localhost:5000/getone/${id}`)

   if(data){
    setdeleted(data.data)
   }

   
    }



getdata()
})


const deletedata =async ()=>{

    await axios.delete(`http://localhost:5000/delete/${id}`).then((result)=>{
        if(result.data=="delete"){
            toast.success("deleted",{position:"bottom-center"})
            navigate('/')
        }
        else{
            toast.error("not deleted",{position:"bottom-center"})
        }
    })


}


  return (


    <div>
<Password/>


  <section className='delete'>
  <div className="blog-boxes">
            <div className="blog-box">
                <h2>{deleted.post}</h2>
            </div>
        
        </div>
        <button className="delete-btn" onClick={deletedata}>
            delete now
        </button>
  </section>
    </div>
  )
}

export default Delete