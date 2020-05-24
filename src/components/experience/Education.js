import React from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";

function Education() {
  return (
    <section>
      <h3>Education</h3>
      <h4>
        <b>Noroff</b>
        <p> - School of technology and digital media</p>
      </h4>
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
                  <ListGroup.Item>Autodesk 3ds Max</ListGroup.Item>
                  <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                  <ListGroup.Item>Adobe Premier Pro</ListGroup.Item>
                  <ListGroup.Item>Design</ListGroup.Item>
                  <ListGroup.Item>Animation</ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <ListGroup>
                  <ListGroup.Item>Autodesk 3ds Max</ListGroup.Item>
                  <ListGroup.Item>Autodesk Premier Pro</ListGroup.Item>
                  <ListGroup.Item>Design</ListGroup.Item>
                  <ListGroup.Item>Animation</ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <ListGroup>
                  <ListGroup.Item>Autodesk 3ds Max</ListGroup.Item>
                  <ListGroup.Item>Unreal Engine</ListGroup.Item>
                  <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                  <ListGroup.Item>Design</ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <ListGroup>
                  <ListGroup.Item>HTML</ListGroup.Item>
                  <ListGroup.Item>CSS</ListGroup.Item>
                  <ListGroup.Item>JavaScript</ListGroup.Item>
                  <ListGroup.Item>Git/GitHub</ListGroup.Item>
                  <ListGroup.Item>Terminal/Bash</ListGroup.Item>
                  <ListGroup.Item>WCAG</ListGroup.Item>
                  <ListGroup.Item>SEO</ListGroup.Item>
                  <ListGroup.Item>Agile</ListGroup.Item>
                  <ListGroup.Item>Scrum/Kanban</ListGroup.Item>
                  <ListGroup.Item>Adobe Illustrator</ListGroup.Item>
                  <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                  <ListGroup.Item>Design</ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>

      {/*<Col sm={6}>
          <Card>
            <Card.Title>3D Design and Animation</Card.Title>
            <Card.Title>3D Film Production</Card.Title>
            <Card.Title>3D Game Design</Card.Title>
            <Card.Title>Front-end Development</Card.Title>
          </Card>
        </Col>

        <Col sm={6}>
          <Card>
            <Card.Body>
              <Card.Text>Autodesk 3ds Max</Card.Text>
              <Card.Text>Adobe Photoshop</Card.Text>
              <Card.Text>Design</Card.Text>
              <Card.Text>Animation</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Text>Autodesk 3ds Max</Card.Text>
              <Card.Text>Design</Card.Text>
              <Card.Text>Animation</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Text>Autodesk 3ds Max</Card.Text>
              <Card.Text>Unreal Engine</Card.Text>
              <Card.Text>Adobe Photoshop</Card.Text>
              <Card.Text>Design</Card.Text>
              <Card.Text>Animation</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Text>HTML</Card.Text>
              <Card.Text>CSS</Card.Text>
              <Card.Text>JavaScript</Card.Text>
              <Card.Text>Git/GitHub</Card.Text>
              <Card.Text>Terminal/Bash</Card.Text>
              <Card.Text>WCAG</Card.Text>
              <Card.Text>SEO</Card.Text>
              <Card.Text>Agile</Card.Text>
              <Card.Text>Scrum/Kanban</Card.Text>
              <Card.Text>Adobe Illustrator</Card.Text>
              <Card.Text>Adobe Photoshop</Card.Text>
              <Card.Text>Design</Card.Text>
            </Card.Body>
          </Card>
        </Col>*/}
    </section>
  );
}

export default Education;
