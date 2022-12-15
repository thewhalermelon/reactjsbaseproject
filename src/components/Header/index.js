import React from 'react';
import './Header.scss';
import myavatar from '../../assets/images/myavatar.jpg';
import { Sun, Moon } from 'react-feather';

const Header = ({ toggleTheme }) => {
  const onChangeThemeStatus = () => {
    toggleTheme();
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <img src={myavatar} alt='my-avatar' />
        <span>TheWhalerMelon</span>
      </div>
      <div className='header__right'>
        <button onClick={onChangeThemeStatus} className='btn toggle-btn lightmode'>
          <Sun />
          <Moon />
        </button>
      </div>
    </div>
  );
};

export default Header;
