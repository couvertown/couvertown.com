import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Store from "./components/Store";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/store">
              <Store />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
