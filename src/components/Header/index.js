import React from 'react';
import './Header.scss';
import myavatar from '../../assets/images/myavatar.jpg';

const Header = () => {
  return (
    <div className='header container--padding'>
      <div className='header__left'>
        <img src={myavatar} alt='my-avatar' />
        <h3>TheWhalerMelon</h3>
      </div>
      <div className='header__right'></div>
    </div>
  );
};

export default Header;
