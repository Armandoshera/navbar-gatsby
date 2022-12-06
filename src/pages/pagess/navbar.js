import React, { useState } from "react"
import "./navbar.css";




const NavBar = () => {
const [nav, showNav] = useState(false)

  return (
    <div className="wrapper">
    
    <div className='menuicon' onClick={() => showNav(!nav)} >
   
         <div className='icon' />
         <div className='icon' />
    </div>
 
    <nav className="menulink" nav={nav}>
        <ul>
            <li><a href=''>Services</a></li>
            <li><a href=''>How We Work</a></li>
            <li><a href=''>Partnership</a></li>
            <li><a href=''>Get A Free Quote</a></li>
        </ul>
    </nav>
    </div>
  )
}
export default NavBar;