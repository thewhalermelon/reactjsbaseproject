import React from 'react';
import { onGenerateIcon } from '../../../utils/utilities';

const PortfolioBody = ({ data }) => {
  console.log('hoang123: ', data);

  return (
    <div className='portfolio_body'>
      <div className='main-column'>
        {data
          .filter((item) => item.icon)
          .map((item) => {
            return (
              <div>
                {onGenerateIcon(item.icon)}
                <span>{item.header}</span>
              </div>
            );
          })}
      </div>
      <div className='side-column'>
        {data
          .filter((item) => !item.icon)
          .map((item) => {
            return <div>{item.header}</div>;
          })}
      </div>
    </div>
  );
};

export default PortfolioBody;
