import React, { useEffect } from 'react';
import './Header.scss';
import myavatar from '../../assets/images/myavatar.jpg';
import { Sun, Moon } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../features/theme/themeSlice';

const Header = ({ toggleTheme }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const onChangeThemeStatus = () => {
    dispatch(setTheme());
    console.log('hoang123: ', theme);
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
