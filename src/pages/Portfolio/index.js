import React, { useEffect, useState } from 'react';
import portrait from '../../assets/images/portrait.jpg';
import Accordion from '../../components/Accordion';
import './Portfolio.scss';
import { deepCopy } from '../../utils/utilities';
import AccordionModel from './model/AccordionModel';

const AccordionData = [
  {
    header: 'Profile',
    body: [
      {
        content: [
          'Hardworking and responsible Front-End Developer with several year.',
          'A progressive and open-minded person.',
          'Looking forward to having the opportunity to work with many new frameworks and libraries.',
          'Enjoy cycling, listening to music, playing game and outdoor activities.'
        ]
      }
    ],
    icon: 'User'
  },
  {
    header: 'Employment history',
    body: [
      {
        content: [
          'Support the senior with daily tasks.',
          'Convert PSD file to HTML and CSS.',
          'Apply the appropriate library for project and customize if needed.',
          'Cook and integrate data from API that provided from Back-End.',
          'Proactively communicate and discuss with Business Analysis and Back-End to find out the best solution for project.'
        ]
      }
    ],
    icon: 'Briefcase'
  },
  {
    header: 'Education',
    body: [
      {
        title: 'Bachelor, Posts and Telecommunications Institute of Technology',
        subtitle: 'June 2014 - January 2019'
      },
      {
        title: 'Techmaster',
        subtitle: 'January 2020 - August 2020'
      }
    ],
    icon: 'BookOpen'
  },
  {
    header: 'Details',
    body: [
      {
        title: '25 Ho Dac Di, Dong Da'
      },
      {
        title: 'Hanoi'
      },
      {
        title: 'Vietnam'
      },
      {
        title: '0904680496'
      },
      {
        title: 'tranhuyhoang8496@gmail.com'
      }
    ]
  },
  {
    header: 'Date/Place of birth',
    body: [
      {
        title: '08/04/1996 Nghe An'
      }
    ]
  },
  {
    header: 'Skills',
    body: [
      {
        title: 'HTML & CSS'
      },
      {
        title: 'JavaScript'
      },
      {
        title: 'JQuery'
      },
      {
        title: 'Bootstrap'
      },
      {
        title: 'ReactJS'
      },
      {
        title: 'Redux, Redux Toolkit'
      },
      {
        title: 'Git'
      }
    ]
  },
  {
    header: 'Languages',
    body: [
      {
        title: 'Vietnamese'
      },
      {
        title: 'English'
      }
    ]
  }
];

const Portfolio = () => {
  const [dataFields, setDataFields] = useState(null);

  useEffect(() => {
    let newArray = [];

    AccordionData.map((ele) => {
      return newArray.push(new AccordionModel().getData(deepCopy(ele) || {}));
    });

    setDataFields(newArray);
  }, []);

  return (
    dataFields && (
      <div className='portfolio'>
        <div className='header'>
          <img src={portrait} className='image' alt='portrait' />
          <div className='text'>
            <span className='name'>Hoang TRAN</span>
            <span className='role'>Front End Developer</span>
          </div>
        </div>
        <Accordion data={dataFields} />
      </div>
    )
  );
};

export default Portfolio;
