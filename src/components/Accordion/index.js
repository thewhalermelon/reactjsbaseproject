import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionComponent = ({ data }) => {
  console.log('hoang123: ', data);

  return (
    <Accordion>
      {data.map((item, index) => {
        return (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{item.header}</Accordion.Header>
            {item.body.map((bodyItem) => {
              return (
                <Accordion.Body>
                  {bodyItem.title}
                  {bodyItem.subtitle}
                  {bodyItem.content.map((contentItem) => {
                    return <>{contentItem}</>;
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
