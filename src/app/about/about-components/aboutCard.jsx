import React from 'react';
import './aboutComp.css';

const AboutCard = (props) => {
    
  return (
    <div className='about-card'>
      <p>{props.number}</p>
      <span>{props.text}</span>
    </div>
  )
}

export default AboutCard
