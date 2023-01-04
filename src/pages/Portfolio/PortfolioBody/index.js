import React, { Fragment } from 'react';
import { onGenerateIcon, validURL } from '../../../utils/utilities';

const PortfolioBody = ({ data }) => {
  return (
    <div className='portfolio_body'>
      <div className='main-column'>
        {data
          .filter((item) => item.icon)
          .map((item, index) => {
            return (
              <Fragment key={index}>
                <div className='main-header'>
                  {onGenerateIcon(item.icon)}
                  <span>{item.header}</span>
                </div>
                <div className='main-body' key={index}>
                  <ol>
                    {item.body.map((bodyItem, bodyIndex) => {
                      return (
                        <Fragment key={bodyIndex}>
                          {bodyItem.title ? (
                            <li key={bodyIndex}>
                              <p>{bodyItem.title}</p>
                              <span>{bodyItem.subtitle}</span>
                              <ul>
                                {bodyItem.content.map((contentItem, contentIndex) => {
                                  return <li key={contentIndex}>{contentItem}</li>;
                                })}
                              </ul>
                              {bodyItem.projects ? (
                                <span>
                                  Projects
                                  <ul>
                                    {bodyItem.projects.map((prjItem, prjIndex) => {
                                      return (
                                        <li key={prjIndex}>
                                          {validURL(prjItem) ? (
                                            <a href={prjItem} target='_blank' rel='noreferrer'>
                                              {prjItem}
                                            </a>
                                          ) : (
                                            `${prjItem}`
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </span>
                              ) : (
                                <></>
                              )}
                            </li>
                          ) : (
                            <ul>
                              {bodyItem.content.map((contentItem, contentIndex) => {
                                return <li key={contentIndex}>{contentItem}</li>;
                              })}
                            </ul>
                          )}
                        </Fragment>
                      );
                    })}
                  </ol>
                </div>
              </Fragment>
            );
          })}
      </div>
      <div className='side-column'>
        {data
          .filter((item) => !item.icon)
          .map((item, index) => {
            return (
              <div className='side-item' key={index}>
                <div className='side-header'>{item.header}</div>
                <div className='side-body'>
                  {item.body.map((bodyItem, bodyIndex) => {
                    return (
                      <Fragment key={bodyIndex}>
                        <div>{bodyItem.title}</div>
                        <div>{bodyItem.subtitle}</div>
                        {bodyItem.content.map((contentItem, contentIndex) => {
                          return <div key={contentIndex}>{contentItem}</div>;
                        })}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PortfolioBody;
