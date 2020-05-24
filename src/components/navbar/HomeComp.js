import React from "react";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import Container from "react-bootstrap/Container";

function HomeComp() {
  return (
    <Container>
      <Route exact path="/" component={Home} />
    </Container>
  );
}

export default HomeComp;
