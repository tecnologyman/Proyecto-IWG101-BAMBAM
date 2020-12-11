import React from "react";
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Tiendas from "./Tiendas";
import Home from "./Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/tiendas" component={Tiendas}/>
        </Switch>
      </div>
    </Router>  
  );
}




export default App;
