import React from "react";
import ReactDOM from "react-dom";
import "./style";
import "./App.css";
import "./Projects.css";
import App from "./App";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <Projects />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
