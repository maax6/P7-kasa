import React from 'react'
import logo from '../../assets/logo.svg'
export default function Header() {
	const pathname = window.location.pathname;
  	return (
	<header className="header">
		<div className="logo__container">
			<img src={logo} alt="Kasa" className="logo" />
		</div>
		<nav className="nav">
        	<ul className="nav__bar">
            	<li className={pathname === '/' ? 'active nav__link' : 'nav__link'} >
               		<a href="/">Acceuil</a>
            	</li>
            	<li className={pathname === '/About' ? 'active nav__link' : 'nav__link'}>
               		<a href="/About">À Propos</a>
            	</li>
         	</ul>
      	</nav>
    </header>
   )
}
