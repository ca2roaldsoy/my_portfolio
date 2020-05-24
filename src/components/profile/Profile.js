import React from "react";
import MyInfo from "./MyInfo";
import AboutMe from "./AboutMe";
import Container from "react-bootstrap/Container";

function Profile() {
  return (
    <Container as="main" role="main">
      <h2>PROFILE</h2>
      <MyInfo />
      <AboutMe />
    </Container>
  );
}

export default Profile;
