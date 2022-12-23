import React from 'react';

function Banner({ title, imageUrl }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})`, color: 'white' }} >
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;