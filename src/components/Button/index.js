import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTheme } from '../../features/theme/themeSlice';

const Button = ({ value, className, children, isNavigateButton }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onNavigatePage = (val) => {
    navigate(parseInt(val));
  };

  const onChangeThemeStatus = () => {
    dispatch(setTheme());
  };

  return (
    <button className={`btn ${className}`} onClick={() => (isNavigateButton ? onNavigatePage(value) : onChangeThemeStatus())}>
      {children}
    </button>
  );
};

export default Button;
