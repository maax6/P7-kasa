import React from 'react'
import logo from '../../assets/logo.svg'
export default function Header() {
   return (
      <div className="header">
         <div className="logo-container">
            <img src={logo} alt="Kasa" className="logo" />
         </div>
         <ul className="navbar">
            <li className="navLink">
               <a href="/">Acceuil</a>
            </li>
            <li className="navLink">
               <a href="/About">À Propos</a>
            </li>
         </ul>
      </div>
   )
}
