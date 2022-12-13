import React from 'react'
import data from '../../assets/templates/aboutData.js'
const slogan = data.slogan;

export default function Banner(title, img) {
   return (
      <div className="herobanner">
         <h1 className="herobanner__title">{slogan}</h1>
      </div>
   )
}


