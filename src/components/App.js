import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <h2 className="title">Surreal Estate</h2>
      <NavBar />
      <Home />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/addproperty" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
