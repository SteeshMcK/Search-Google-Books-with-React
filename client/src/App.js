import React, { Component } from "react";
import Header from "./components/Header/index";
import Search from "./components/Search/index";
import Saved from "./components/Saved/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </div>
       </Router> 
    );
  }
}

export default App;
