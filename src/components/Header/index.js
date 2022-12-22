import React from 'react';
import './Header.scss';
import myavatar from '../../assets/images/myavatar.jpg';
import { Sun, Moon } from 'react-feather';
import { useSelector } from 'react-redux';
import Button from '../Button';

const Header = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`header ${theme.darkmode ? '' : 'lightmode'}`}>
      <div className='header__left'>
        <img src={myavatar} alt='my-avatar' />
        <span>TheWhalerMelon</span>
      </div>
      <div className='header__right'>
        <Button className='toggle-btn' isNavigateButton={false}>
          <Sun />
          <Moon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
