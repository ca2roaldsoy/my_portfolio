import React from "react";
import { Route } from "react-router-dom";
import Home from "../home/Home";

function HomeComp() {
  return <Route exact path="/" component={Home} />;
}

export default HomeComp;
