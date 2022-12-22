import React from 'react';
import portrait from '../../assets/images/portrait.jpg';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='header'>
        <img src={portrait} className='image' />
        <div className='text'>
          <span className='name'>Hoang TRAN</span>
          <span className='role'>Front End Developer</span>
        </div>
      </div>
      <div className='main'></div>
    </div>
  );
};

export default Portfolio;
