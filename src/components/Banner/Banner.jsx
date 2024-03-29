import React from 'react'

export default function Banner({ title, imageUrl, height }) {
   return (
      <div
         className="banner"
         style={{
            backgroundImage: `linear-gradient(5deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7)),url(${imageUrl})`,
            height: height,
         }}
      >
         <h1 className="banner__text">{title}</h1>
      </div>
   )
}
