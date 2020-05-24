import React from "react";
import { Route } from "react-router-dom";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Profile from "../profile/Profile";
import Navbar from "./Navbar";

function MyStatsComp() {
  return (
    <>
      <Navbar />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
}

export default MyStatsComp;
