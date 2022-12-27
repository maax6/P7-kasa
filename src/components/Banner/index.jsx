import React from 'react';

function Banner({ title, imageUrl }) {
  return (
    <div className="banner" 
		 style={{
		 backgroundImage: `linear-gradient(5deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7)),url(${imageUrl})`
		 }}>
      <h1 className="banner__text">{title}</h1>
    </div>
  );
};

export default Banner;
