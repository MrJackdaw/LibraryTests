import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//
import "./resources/styles/reset.css";
import "./resources/styles/Buttons.css";
import "./resources/styles/Flex.css";
import "./resources/styles/Lists.css";
import "./resources/styles/Sections.css";
import "./resources/styles/App.css";

const Counters = {
  path: "/",
  text: "Counters (RaphsDucks)",
  component: lazy(() => import("./routes/Ducks")),
};
const AppNetworkLayer = {
  path: "/network-manager",
  text: "App Network Layer",
  component: lazy(() => import("./routes/NetworkManager")),
};

export default function App() {
  return (
    <Suspense fallback={<div>Loading Route ... </div>}>
      <Router>
        <div className="App">
          <nav className="button-group app-menu">
            <Link to="/">Counters (RaphsDucks)</Link>&nbsp;&bull;&nbsp;
            <Link to="/network-manager">App Network Layer</Link>
          </nav>
        </div>
        <Route path={Counters.path} component={Counters.component} />
        <Route
          path={AppNetworkLayer.path}
          component={AppNetworkLayer.component}
        />
      </Router>
    </Suspense>
  );
}
