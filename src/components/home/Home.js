import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ParticlesBg from "particles-bg";

function Home() {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} color="#c9c9c9" />
      <Row className="home">
        <Col sm={6}>
          <h1 className="animate__animated animate__fadeIn home__title">
            Cato
            <br />
            Roaldsøy
          </h1>
        </Col>
        <Col sm={6} className="home__link">
          <NavLink to="/profile" role="link">
            <div
              className={`animate__animated animate__bounceInDown animate__slow home__link--link`}
            >
              Profile
            </div>
          </NavLink>

          <NavLink to="/experience" role="link">
            <div
              className={`animate__animated animate__bounceInDown animate__slower home__link--link`}
            >
              Experience
            </div>
          </NavLink>
          <NavLink to="/projects" role="link">
            <div
              className={`animate__animated animate__bounceInDown animate__slow animate__delay-1s home__link--link`}
            >
              Projects
            </div>
          </NavLink>

          <NavLink to="/contact" role="link">
            <div
              className={`animate__animated animate__bounceInDown animate__slower animate__delay-1s home__link--link`}
            >
              Contact
            </div>
          </NavLink>
        </Col>
        }
      </Row>
    </>
  );
}

export default Home;
