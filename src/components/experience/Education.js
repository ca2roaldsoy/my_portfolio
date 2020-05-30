import React from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";

function Education() {
  return (
    <section>
      <h3 className="mt-5">Education</h3>
      <h5 className="mt-4 mb-3">
        <b>Noroff</b>
        <p> - School of technology and digital media</p>
      </h5>
      <Row>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Col sm={5}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                3D Design and Animation
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                3D Film Production
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                3D Game Design
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Front-end Development
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <ListGroup>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Autodesk 3ds Max
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Adobe Photoshop
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Adobe Premier Pro
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Design
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Animation
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <ListGroup>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Autodesk 3ds Max
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Autodesk Premier Pro
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Design
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Animation
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <ListGroup>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Autodesk 3ds Max
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Unreal Engine
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Adobe Photoshop
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Design
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <ListGroup>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    HTML
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    CSS
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    JavaScript
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Git/GitHub
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Terminal/Bash
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    WCAG
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    SEO
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Agile
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Scrum/Kanban
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Adobe Illustrator
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Adobe Photoshop
                  </ListGroup.Item>
                  <ListGroup.Item className="animate__animated animate__lightSpeedInLeft home__link--link">
                    Design
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>
    </section>
  );
}

export default Education;
