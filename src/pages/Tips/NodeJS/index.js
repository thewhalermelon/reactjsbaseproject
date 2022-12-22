import React from 'react';
import { Link } from 'react-router-dom';

const NodeJS = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/dependency'>Dependencies, devDependencies and peerDependencies</Link>
        </li>
      </ul>
    </div>
  );
};

export default NodeJS;
