import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import GitHub from "../../assets/github.png";
import LinkIcon from "../../assets/link_2.png";
import Badge from "react-bootstrap/Badge";

function ProjectDetail({
  title,
  script,
  style,
  code,
  img,
  gitLink,
  web,
  subTitle,
}) {
  return (
    <Col
      sm={12}
      md={4}
      lg={4}
    >
      <Card className="project">
        <Card.Img variant="top" src={img} />
        <Card.Title className="project__title text-center">{title}</Card.Title>
        <small className="text-center">
          <i>{subTitle}</i>
        </small>
        <Card.Body className="project__body">
          <Badge className="project__body--badge">
            <Card.Text>{script}</Card.Text>
          </Badge>
          <Badge className="project__body--badge">
            <Card.Text>{style}</Card.Text>
          </Badge>
          <Badge className="project__body--badge">
            <Card.Text>{code}</Card.Text>
          </Badge>
        </Card.Body>
        <Card.Footer className="project__footer d-flex">
          <a
            href={web}
            rel="noopener noreferrer"
            target="_blank"
            className="project__footer--img"
          >
            <Image src={LinkIcon} alt="Link" fluid />
          </a>

          <a
            href={gitLink}
            rel="noopener noreferrer"
            target="_blank"
            className="project__footer--img"
          >
            <Image src={GitHub} alt="GitHub" fluid />
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ProjectDetail;
