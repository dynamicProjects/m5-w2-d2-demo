import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home(){
  return(
    <div>
      <h2>Home</h2>
      <p>This is home</p>
    </div>
  );
}
function About(){
  return(
    <div>
      <h2>About</h2>
    </div>
  );
}
function Users(){
  return(
    <div>
      <h2>Users</h2>
    </div>
  );
}
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to= "/">Home</Link>
            </li>
              <li>
              <Link to= "/about">About</Link>
            </li>
              <li>
              <Link to= "/users">Users</Link>
            </li>
          </ul>
        </nav>
        <switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </switch>
      </div>
    </Router>
  );
}
