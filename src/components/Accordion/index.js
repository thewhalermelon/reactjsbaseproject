import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { onGenerateIcon } from '../../utils/utilities';
import './Accordion.scss';

const AccordionComponent = ({ data }) => {
  return (
    <Accordion>
      {data.map((item, index) => {
        return (
          <Accordion.Item eventKey={index} key={item.header}>
            <Accordion.Header>
              {onGenerateIcon(item.icon)}
              <span>{item.header}</span>
              <div className='second-icon'>
                <Icon.ChevronDown />
              </div>
            </Accordion.Header>
            <Accordion.Body>
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
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default AccordionComponent;
