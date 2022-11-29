import React from 'react';
import "./Figment.css"
const Figment = ({ title, description }) => {
  return (
    <div className='figment'>
      <h2>+ {title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Figment;