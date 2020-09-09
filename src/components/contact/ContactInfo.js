import React from "react";
import { Col, Row, ListGroupItem, ListGroup, Image } from "react-bootstrap";
import MyContactImg from "../../assets/contact_pic_2.jpg";

function ContactInfo() {
  return (
    <>
      <h4 className="text-center mt-5">Feel free to contact me :)</h4>
      <Row className="contact">
        <Col sm={6}>
          <Image
            src={MyContactImg}
            alt="profile of me"
            fluid
            roundedCircle
            className="animate__animated animate__fadeInDown animate__slow contact__img"
          />
        </Col>
        <Col sm={6} className="contact__info">
          <ListGroup variant="flush" as="ul">
            <ListGroupItem as="li">
              <b>Name:</b> Cato Roaldsøy
            </ListGroupItem>
            <ListGroupItem as="li">
              <b>Adress:</b> P. Krohns Veg 12
            </ListGroupItem>
            <ListGroupItem as="li">
              <b>City:</b> 4351 Kleppe
            </ListGroupItem>
            <ListGroupItem as="li">
              <b>Phone:</b> 90 12 95 17
            </ListGroupItem>
            <ListGroupItem as="li">
              <b>E-mail:</b> roaldsoyen@gmail.com
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default ContactInfo;
