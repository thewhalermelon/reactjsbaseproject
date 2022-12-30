import React, { useEffect, useState } from 'react';
import portrait from '../../assets/images/portrait.jpg';
import Accordion from '../../components/Accordion';
import './Portfolio.scss';
import { deepCopy } from '../../utils/utilities';
import AccordionModel from './model/AccordionModel';
import PortfolioBody from './PortfolioBody';
import { useGetPortfolioQuery } from '../../features/api/portfolioSlice';

const Portfolio = () => {
  const [dataFields, setDataFields] = useState(null);
  const { data: portfolioData } = useGetPortfolioQuery();

  useEffect(() => {
    if (portfolioData) {
      let newArray = [];

      portfolioData.record.data.map((ele) => {
        return newArray.push(new AccordionModel().getData(deepCopy(ele) || {}));
      });

      setDataFields(newArray);
    }
  }, [portfolioData]);

  return (
    dataFields &&
    portfolioData && (
      <div className='portfolio'>
        <div className='portfolio_header'>
          <img src={portrait} className='image' alt='portrait' />
          <div className='text'>
            <span className='name'>Hoang TRAN</span>
            <span className='role'>Front End Developer</span>
          </div>
        </div>
        <Accordion data={dataFields} />
        <PortfolioBody data={dataFields} />
      </div>
    )
  );
};

export default Portfolio;
