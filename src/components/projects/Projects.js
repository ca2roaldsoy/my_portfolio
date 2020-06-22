import React from "react";
import { Col, Row, Card, Image } from "react-bootstrap";
import GitHub from "../../assets/github.png";
import LinkIcon from "../../assets/link_2.png";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <Row className="projectContainer">
        <Col sm={6} lg={4}>
          <Card className="project">
            <Card.Img
              variant="top"
              src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5ed2d44f58c052310ac15d9b/screenshot.png"
            />
            <Card.Body>
              <Card.Title className="project__title text-center">
                Amiibo
              </Card.Title>
              <Card.Text>React</Card.Text>
              <Card.Text>Sass</Card.Text>
              <Card.Text>Html</Card.Text>
            </Card.Body>
            <Card.Footer className="project__footer d-flex">
              <Col sm={12} lg={6}>
                <a
                  href="https://amiibo-characters.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project__footer--img"
                >
                  <Image src={LinkIcon} alt="Link" fluid />
                </a>
              </Col>

              <Col sm={12} lg={6}>
                <a
                  href="https://github.com/ca2roaldsoy/Portfolio-2_Ajax-and-Typescript"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project__footer--img"
                >
                  <Image src={GitHub} alt="GitHub" fluid />
                </a>
              </Col>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={6} lg={4}>
          <Card className="project">
            <Card.Img
              variant="top"
              src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5ed2dbea87e8c7076b3a898d/screenshot.png"
            />
            <Card.Body>
              <Card.Title className="project__title text-center">
                Card Game
              </Card.Title>
              <Card.Text>React</Card.Text>
              <Card.Text>Sass</Card.Text>
              <Card.Text>Html</Card.Text>
            </Card.Body>
            <Card.Footer className="project__footer d-flex">
              <Col sm={12} lg={6}>
                <a
                  href="https://gameofcards.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image src={LinkIcon} alt="Link" fluid />
                </a>
              </Col>

              <Col sm={12} lg={6}>
                <a
                  href="https://github.com/ca2roaldsoy/Portfolio2-JS1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image src={GitHub} alt="GitHub" fluid />
                </a>
              </Col>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={6} lg={4}>
          <Card className="project">
            <Card.Img
              variant="top"
              src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5ed2e1f902b1491744b588ed/screenshot.png"
            />
            <Card.Body>
              <Card.Title className="project__title text-center">
                Game of Thrones Game
              </Card.Title>
              <Card.Text>JavaScript</Card.Text>
              <Card.Text>Sass</Card.Text>
              <Card.Text>Html</Card.Text>
            </Card.Body>
            <Card.Footer className="project__footer d-flex">
              <Col sm={12} lg={6}>
                <a
                  href="https://reach-the-throne.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image src={LinkIcon} alt="Link" fluid />
                </a>
              </Col>

              <Col sm={12} lg={6}>
                <a
                  href="https://github.com/ca2roaldsoy/SemesterProject2019"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image src={GitHub} alt="GitHub" fluid />
                </a>
              </Col>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Projects;
