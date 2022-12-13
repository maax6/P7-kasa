import React from 'react'

import bckImg from  "../../assets/images/Background-about.png"
const img = bckImg

export default function Banner() {
   return (
		<div className="banner">
			<img className='banner__img' src={img} alt="" />
		</div>
   )
};

// <div className="banner">
	// <img src={image} alt="" className="banner__img" />
	// <div className="banner__overlay"></div>
	// {text ? <h1 className="banner__text">{text}</h1> : null}
// </div>