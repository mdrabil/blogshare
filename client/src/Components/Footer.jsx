import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
  <div className="footer">
      <div className="footer-boxes">
      <div className="footer-box">
          <Link>
        <h2>related </h2>
        <h4>imosnal</h4>
        <h4>sad</h4>
        <h4>attitude</h4>
          </Link>
        </div>
        <div className="footer-box">
          <Link>
        <h2>member</h2>
        <h4>md rebel </h4>
        <h4>sayer no 2</h4>
        <h4>sayer no3</h4>
          </Link>
        </div>
        <div className="footer-box" >
          <Link>
        <h2>contact us</h2>
        <h4>india</h4>
    <div className="links">
    <i class="ri-youtube-fill"></i>
    <i class="ri-instagram-fill"></i>
    <i class="ri-twitter-fill"></i>
    </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer