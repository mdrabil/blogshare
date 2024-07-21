import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
  <header>
            <div className="logo">
                <Link to={'/'}><h1>my<span>logo</span></h1></Link>
            </div>
            <ul className="navbar">
            <Link to={'/sign'}>
                <h4>sign-up</h4>
                </Link>

                <Link to={'/post'}>
                <h4>post</h4>
                </Link>
            </ul>
            <div className="menu">
            <i class="ri-menu-fill"></i>
            </div>
        </header>

      
    </div>
  )
}

export default Header