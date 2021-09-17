import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Share from "./pages/Share";
import { useState } from "react";
import Poll from "./pages/Poll";

function App() {
  const [urlKey, setUrlKey] = useState<string>("");

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home setUrlKey={setUrlKey} />
            </Route>
            <Route exact path="/share">
              <Share urlKey={urlKey} />
            </Route>
            <Route exact path="/events/:key">
              <Poll />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
