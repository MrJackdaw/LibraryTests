import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";
//
import "./resources/styles/reset.css";
import "./resources/styles/Buttons.css";
import "./resources/styles/Flex.css";
import "./resources/styles/Lists.css";
import "./resources/styles/Sections.css";
import "./resources/styles/App.css";

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading Route ... </div>}>
      <Router>
        <div className="App">
          <nav className="button-group app-menu">
            <Link to="/">Counters (RaphsDucks)</Link>&nbsp;&bull;&nbsp;
            <Link to="/network-manager">App Network Layer</Link>
          </nav>

          <Switch>
            {routes.map((r, i) => (
              <Route exact key={i} path={r.path} component={r.component} />
            ))}
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
}
