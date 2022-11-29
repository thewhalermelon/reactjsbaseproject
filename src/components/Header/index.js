import React from 'react';
import './Header.scss';
import myavatar from '../../assets/images/myavatar.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={myavatar} alt='my-avatar' />
        <span>TheWhalerMelon</span>
      </div>
      <div className='header__right'></div>
    </div>
  );
};

export default Header;
