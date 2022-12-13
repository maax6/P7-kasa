import React from 'react'
import logo from '../../assets/logo.svg'
export default function Header() {
   return (
      <header className="header">
		<div className="logo__container">
			<img src={logo} alt="Kasa" className="logo" />
		</div>
		<nav className="nav">
         <ul className="nav__bar">
            <li className="nav__Link">
               <a href="/">Acceuil</a>
            </li>
            <li className="nav__Link">
               <a href="/About">À Propos</a>
            </li>
         </ul>
      </nav>
      </header>
   )
}
