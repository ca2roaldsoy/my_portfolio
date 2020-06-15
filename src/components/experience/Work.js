import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Work() {
  return (
    <article className="work">
      <h2 className="work__title">Work</h2>

      <Row>
        <Col sm={12} lg={4} as="section" className="work__item">
          <h3>Madla Military Camp</h3>
          <h4>Assistent Chef</h4>
          <p>&#8226; Helping around the kitchen. Learning up new recruits</p>
        </Col>

        <Col sm={12} lg={4} as="section" className="work__item">
          <h4>Viking Stadium</h4>
          <h5>Waiter</h5>
          <p>
            &#8226; Waiter for Viking Football Club each time they played home
          </p>
        </Col>

        <Col sm={12} lg={4} as="section" className="work__item">
          <h4>Rogaland Taxi</h4>
          <h5>Call Center</h5>
          <p>&#8226; Customer Support and taking taxi orders by phone</p>
        </Col>
      </Row>
    </article>
  );
}

export default Work;
