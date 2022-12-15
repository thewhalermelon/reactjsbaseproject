import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './InitialPage.scss';

const InitialPage = () => {
  return (
    <div className='app'>
      <div>
        <img src={logo} className='app-logo' alt='logo' />
        <h1 className='title'>my original project</h1>
        <ul className='list'>
          <li className='item'>
            <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
              React Homepage
            </a>
          </li>
          <li className='item'>
            <Link to='/my-profile'>My Profile</Link>
          </li>
          <li className='item'>
            <Link to='/tips'>Tips</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InitialPage;
