import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../../assets/templates/aboutData.js'
import bannerHome from './home-banner.png'
import bannerAbout from './about-banner.png'
const slogan = data.slogan;

export default function Herobanner(title, img) {
   return (
      <div className="herobanner">
         <h1 className="herobanner__title">{slogan}</h1>
		 <img className='imgBan' src={bannerHome} alt="" />
      </div>
   )
}


