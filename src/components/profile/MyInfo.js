import React from "react";
import { Col, Row, ListGroupItem, ListGroup, Image } from "react-bootstrap";
import MyProfileImg from "../../assets/myprofile_image.jpg";

function MyInfo() {
  return (
    <Row className="profile">
      <Col sm={6}>
        <Image
          src={MyProfileImg}
          alt="profile of me"
          fluid
          roundedCircle
          className="animate__animated animate__fadeInDown animate__slow profile__img"
        />
      </Col>
      <Col sm={6} className="profile__info">
        <ListGroup variant="flush" as="ul">
          <ListGroupItem
            as="li"
            className="animate__animated animate__lightSpeedInLeft animate__slow"
          >
            <b>Name:</b> Cato Roaldsøy
          </ListGroupItem>
          <ListGroupItem
            as="li"
            className="animate__animated animate__lightSpeedInLeft animate__slower"
          >
            <b>Age:</b> 32 years
          </ListGroupItem>
          <ListGroupItem
            as="li"
            className="animate__animated animate__lightSpeedInLeft animate__slow animate__delay-1s"
          >
            <b>Adress:</b> P. Krohns Veg 12
          </ListGroupItem>
          <ListGroupItem
            as="li"
            className="animate__animated animate__lightSpeedInLeft animate__slower animate__delay-1s"
          >
            <b>City:</b> 4351 Kleppe
          </ListGroupItem>
          <a
            href="https://www.facebook.com/people/Cato-Roalds%C3%B8y/100000434225604"
            className="animate__animated animate__lightSpeedInLeft animate__slower animate__delay-1s mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Look me up on Facebook
          </a>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default MyInfo;
