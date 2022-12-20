import React from 'react';
import ReactLogo from '../../assets/images/logo';
import { Link } from 'react-router-dom';
import './InitialPage.scss';
import { useSelector } from 'react-redux';
import { REACT_LOGO_DEFAULT_COLOR, TERTIARY } from '../../constants';

const InitialPage = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className='app'>
      <div className={`app-logo ${theme.darkmode ? '' : 'lightmode'}`}>
        <ReactLogo fill={`${theme.darkmode ? REACT_LOGO_DEFAULT_COLOR : TERTIARY} `} />
      </div>
      <h1 className={`title ${theme.darkmode ? '' : 'lightmode'}`}>original project</h1>
      <ul className={`list ${theme.darkmode ? '' : 'lightmode'}`}>
        <li className='item'>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            React Homepage
          </a>
        </li>
        <li className='item'>
          <Link to='/my-profile'>Profile</Link>
        </li>
        <li className='item'>
          <Link to='/tips'>Tips</Link>
        </li>
      </ul>
    </div>
  );
};

export default InitialPage;
