import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {

  const [post,setpost] =useState([])

useEffect(()=>{

const getdata =async ()=>{


  const mydata= await axios.get('http://localhost:5000/get')

  if(mydata){
setpost(mydata.data)

  }

}
getdata()
})



  return (
    <div>
           <section className="blog">
            <h1 className="heading">- blogs - </h1>
            <div className="blog-boxes">
            {
              post.map((item,index)=>{
return <>
 <div className="blog-box">
                  <div className="blog-post">
                   <h2>{item.post}</h2>
                    <h4>{item.username}</h4>
                  </div>
                  <div className="blog-links">
                 
                 <Link to={`/edit/${item._id}`}>
                 <i class="ri-pencil-fill"></i>
                 </Link>
             <Link to={`/delete/${item._id}`}>
             <i class="ri-delete-bin-5-line"></i>
                
             </Link>
                  </div>
                </div>


</>
              })
            }
            </div>
        </section>
    </div>
  )
}

export default Blog