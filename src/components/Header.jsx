import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/Header.css'

function Banner() {
   return (
      <div className="kasa-header">
         <img src={logo} alt="Kasa" className="kasa-logo" />
         <br />
         <ul className="navbar">
            <li className="navLink">
               <a href="/">Acceuil</a>
            </li>
            <li className="navLink">
               <a href="/">À Propos</a>
            </li>
         </ul>
      </div>
   )
}
export default Banner
