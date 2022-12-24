import React from 'react';

function Banner({ title, imageUrl }) {
  return (
    <div className="banner" 
		 style={{
		 backgroundImage: `url(${imageUrl})`}}>
      <h1 className="banner__text">{title}</h1>
    </div>
  );
};

export default Banner;