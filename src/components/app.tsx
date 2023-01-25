import { h } from "preact";
import { Route, Router } from "preact-router";

import Header from "./header";
import Navigation from "./Navigation";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div class="h-screen flex flex-col gap-4">
    <Header class="flex-none" />
    <main class="flex-auto flex py-4 md:px-auto justify-center items-center px-8 max-w-5xl overflow-y-auto">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
      </Router>
    </main>
    <Navigation class="flex-none" />
  </div>
);

export default App;
