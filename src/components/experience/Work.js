import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

function Work() {
  return (
    <section className="mb-3 work">
      <h3 className="mt-5 mb-3">Work</h3>
      <Row>
        <Col sm={12} md={4} className="work__item">
            <Card>
              <Card.Title className="mb-3">Megabite AS</Card.Title>
              <Card.Subtitle className="mb-3">Consultant/Developer</Card.Subtitle>
              <Card.Text>
                WordPress
              </Card.Text>
              <Card.Text>
                WordPress
              </Card.Text>
              
            </Card>
          </Col>

        <Col sm={12} md={4} className="work__item">
          <Card>
            <Card.Title className="mb-3">Madla Military Camp</Card.Title>
            <Card.Subtitle className="mb-3">Assistent Chef</Card.Subtitle>
            <Card.Text>
              Helping around the kitchen. Learning up new recruits
            </Card.Text>
          </Card>
        </Col>

        <Col sm={12} md={4} className="work__item">
          <Card>
            <Card.Title className="mb-3">Viking Stadium</Card.Title>
            <Card.Subtitle className="mb-3">Waiter</Card.Subtitle>
            <Card.Text>
              Waiter for Viking Football Club each time they played home
            </Card.Text>
          </Card>
        </Col>

        <Col sm={12} md={4} className="work__item">
          <Card>
            <Card.Title className="mb-3">Rogaland Taxi</Card.Title>
            <Card.Subtitle className="mb-3">Call Center</Card.Subtitle>
            <Card.Text>
              Customer Support and taking taxi orders by phone
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Work;
