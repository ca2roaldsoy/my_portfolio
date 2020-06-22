import React from "react";
import "react-vertical-timeline-component/style.min.css";
import MyStatsComp from "./components/navbar/MyStatsComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComp from "./components/navbar/HomeComp";
import Container from "react-bootstrap/Container";
import "./style/style.scss";

function App() {
  return (
    <Container className="App" fluid>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComp} />
          <Route exact path="/profile" component={MyStatsComp} />
          <Route exact path="/experience" component={MyStatsComp} />
          <Route exact path="/projects" component={MyStatsComp} />
          <Route exact path="/contact" component={MyStatsComp} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
