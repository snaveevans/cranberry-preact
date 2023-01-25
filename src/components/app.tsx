import { h } from "preact";
import { Route, Router } from "preact-router";

import Header from "./header";
import Navigation from "./Navigation";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Food from "../routes/Food";
import Makeup from "../routes/Makeup";
import Hygiene from "../routes/Hygiene";
import Cleaners from "../routes/Cleaners";
import { useState } from "preact/hooks";

const App = () => {
  const [url, setUrl] = useState<string>();
  return (
    <div class="h-screen flex flex-col gap-4">
      <Header class="flex-none" />
      <main class="flex-auto flex py-4 md:px-auto justify-center items-center px-8 max-w-5xl overflow-y-auto">
        <Router onChange={(args) => setUrl(args.url)}>
          <Route path="/" component={Home} />
          <Route path="/food/" component={Food} />
          <Route path="/hygiene/" component={Hygiene} />
          <Route path="/makeup/" component={Makeup} />
          <Route path="/cleaners/" component={Cleaners} />
        </Router>
      </main>
      {url !== "/" && <Navigation class="flex-none" />}
    </div>
  );
};

export default App;
