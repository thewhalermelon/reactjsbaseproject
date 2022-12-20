import React from 'react';
import './Header.scss';
import myavatar from '../../assets/images/myavatar.jpg';
import { Sun, Moon } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../features/theme/themeSlice';
import Button from '../Button';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const onChangeThemeStatus = () => {
    dispatch(setTheme());
  }

  return (
    <div className={`header ${theme.darkmode ? '' : 'lightmode'}`}>
      <div className='header__left'>
        <img src={myavatar} alt='my-avatar' />
        <span>TheWhalerMelon</span>
      </div>
      <div className='header__right'>
        <button onClick={onChangeThemeStatus} className={`btn toggle-btn ${theme.darkmode ? '' : 'lightmode'}`}>
          <Sun />
          <Moon />
        </button>
      </div>
    </div>
  );
};

export default Header;
