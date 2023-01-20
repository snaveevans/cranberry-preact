import { h } from "preact";
import { Route, Router } from "preact-router";

import Header from "./header";
import Navigation from "./Navigation";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
      </Router>
    </main>
    <Navigation />
  </div>
);

export default App;
