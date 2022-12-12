import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const InitialPage = () => {
  return (
    <div className='App'>
      <div>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li href='https://reactjs.org' target='_blank'>
            React Homepage
          </li>
          <li>
            <Link to='/my-profile'>My Profile</Link>
          </li>
          <li>
            <Link to='/tips'>Tips</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InitialPage;
