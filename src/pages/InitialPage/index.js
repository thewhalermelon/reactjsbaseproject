import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './InitialPage.scss';
import { Camera } from 'react-feather';

const InitialPage = () => {
  return (
    <div className='app'>
      <img src={logo} className='app-logo' alt='logo' />
      <h1 className='title'>original project</h1>
      <ul className='list'>
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
