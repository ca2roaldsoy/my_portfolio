import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="May 2021 - d.d"
              icon="W"
              iconClassName="timelineIcon"
            >
              <h3 className="vertical-timeline-element-title">
                Consultant/Developer
              </h3>
              <p>Megabite AS</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    Work Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>WordPress</ListGroup.Item>
                      <ListGroup.Item>Divi</ListGroup.Item>
                      <ListGroup.Item>Gutenberg</ListGroup.Item>
                      <ListGroup.Item>Elementor</ListGroup.Item>
                      <ListGroup.Item>PHP</ListGroup.Item>
                      <ListGroup.Item>CSS</ListGroup.Item>
                      <ListGroup.Item>Updates</ListGroup.Item>
                      <ListGroup.Item>Backups</ListGroup.Item>
                      <ListGroup.Item>Maintenance</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="August 2020 - December 2020"
              icon="E"
              iconClassName="timelineIcon"
            >
              <h3 className="vertical-timeline-element-title">
              Development
              </h3>
              <p>TISIP (It-fag)</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    School Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>PHP</ListGroup.Item>
                      <ListGroup.Item>JAVA</ListGroup.Item>
                      <ListGroup.Item>SQL / MySQL</ListGroup.Item>
                      <ListGroup.Item>Azure</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="August 2018 - June 2020"
              icon="E"
              iconClassName="timelineIcon"
            >
              <h3 className="vertical-timeline-element-title">
                Front-end Development
              </h3>
              <p>Noroff - School of technology and digital media</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    School Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>HTML</ListGroup.Item>
                      <ListGroup.Item>CSS</ListGroup.Item>
                      <ListGroup.Item>SASS</ListGroup.Item>
                      <ListGroup.Item>JavaScript</ListGroup.Item>
                      <ListGroup.Item>React</ListGroup.Item>
                      <ListGroup.Item>Vue</ListGroup.Item>
                      <ListGroup.Item>Git/GitHub</ListGroup.Item>
                      <ListGroup.Item>Terminal/Bash</ListGroup.Item>
                      <ListGroup.Item>WCAG</ListGroup.Item>
                      <ListGroup.Item>SEO</ListGroup.Item>
                      <ListGroup.Item>Agile</ListGroup.Item>
                      <ListGroup.Item>DevOps</ListGroup.Item>
                      <ListGroup.Item>Adobe XD</ListGroup.Item>
                      <ListGroup.Item>Design</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="June 2007 - September 2018"
              icon="W"
            >
              <h3 className="vertical-timeline-element-title">
                Assistent Chef / Chef
              </h3>
              <p>KNM Harald Haarfagre</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    Work Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>Work in messhall</ListGroup.Item>
                      <ListGroup.Item>
                        Trained recruits and substitutes
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Clear the messhall for the next meal
                      </ListGroup.Item>
                      <ListGroup.Item>
                        HSE (Health, Security and Environment)
                      </ListGroup.Item>
                      <ListGroup.Item>Internal Control System of Food</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="March 2011 - February 2012"
              icon="W"
            >
              <h3 className="vertical-timeline-element-title">Call-Center</h3>
              <p>Rogaland Taxi</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    Work Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>Take taxi orders</ListGroup.Item>
                      <ListGroup.Item>Customer Support</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="April 2010 - August 2010"
              icon="W"
            >
              <h3 className="vertical-timeline-element-title">Ticket salesman</h3>
              <p>Boreal Transport</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    Work Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>
                        Selling tickets for a guided buss tour and to pulpit rock
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Primarly selling tickets to tourists from another country
                      </ListGroup.Item>
                      <ListGroup.Item>Summer job</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="May 2009 - August 2009"
              icon="W"
            >
              <h3 className="vertical-timeline-element-title">Activity host</h3>
              <p>Kristiandsand Dyrepark (Kristiandsand Zoo)</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    Work Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>
                        Worked with different acitvites in the Park
                      </ListGroup.Item>
                      <ListGroup.Item>Summer job</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="August 2008 - June 2009"
              icon="E"
            >
              <h3 className="vertical-timeline-element-title">3D Game Design</h3>
              <p>Noroff - School of technology and digital media</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    School Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>Autodesk 3ds Max</ListGroup.Item>
                      <ListGroup.Item>Unreal Engine</ListGroup.Item>
                      <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                      <ListGroup.Item>Design</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="August 2007 - June 2008"
              icon="E"
            >
              <h3 className="vertical-timeline-element-title">3D Film</h3>
              <p>Noroff - School of technology and digital media</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    School Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>Autodesk 3ds Max</ListGroup.Item>
                      <ListGroup.Item>Autodesk Premier Pro</ListGroup.Item>
                      <ListGroup.Item>Design</ListGroup.Item>
                      <ListGroup.Item>Animation</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="August 2006 - June 2007"
              icon="E"
            >
              <h3 className="vertical-timeline-element-title">
                3D Design and Animation
              </h3>
              <p>Noroff - School of technology and digital media</p>

              <Accordion>
                <Card className="accordion_dropdown">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="primary"
                    id="dropdown-basic"
                    eventKey="0"
                    className="accordion_dropdown-header"
                  >
                    School Topics
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="accordion_dropdown--arrow"
                    />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>Autodesk 3ds Max</ListGroup.Item>
                      <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                      <ListGroup.Item>Adobe Premier Pro</ListGroup.Item>
                      <ListGroup.Item>Design</ListGroup.Item>
                      <ListGroup.Item>Animation</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Education;
