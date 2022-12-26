import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Briefcase, ChevronDown } from 'react-feather';
import './Accordion.scss';

const AccordionComponent = ({ data }) => {
  const onGenerateIcon = (icon) => {
    let CustomTag = `${icon}`;

    return <CustomTag />;
  };

  return (
    <Accordion>
      {data.map((item, index) => {
        return (
          <Accordion.Item eventKey={index} key={item.header}>
            <Accordion.Header>
              {/* {onGenerateIcon(item.icon)} */}
              <Briefcase />
              {item.header}
              <ChevronDown />
            </Accordion.Header>
            {item.body.map((bodyItem, bodyIndex) => {
              return (
                <Accordion.Body key={bodyIndex}>
                  {bodyItem.title}
                  {bodyItem.subtitle}
                  {bodyItem.content.map((contentItem, contentIndex) => {
                    return <div key={contentIndex}>{contentItem}</div>;
                  })}
                </Accordion.Body>
              );
            })}
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default AccordionComponent;
