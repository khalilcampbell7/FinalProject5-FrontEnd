import './App.css';
import NavBar from './Components/NavBar'
import React from "react";
import Home from './Components/Home'
import ViewBlog from './Components/ViewBlog'
import AddBlog from './Components/AddBlog'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/viewblog">
            <ViewBlog />
          </Route>
          <Route exact path="/addblog">
            <AddBlog />
          </Route>
        </Switch>
    </Router>
  );
}
