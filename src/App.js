import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Action from "./pages/Action";
import Animation from "./pages/Animation";
import Crime from "./pages/Crime";
import Drama from "./pages/Drama";
import Fantasy from "./pages/Fantasy";
import Home from "./pages/Home";
import Horror from "./pages/Horror";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="background title">
        <NavBar />
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/action" component={Action} />
          <Route exact path="/animation" component={Animation} />
          <Route exact path="/crime" component={Crime} />
          <Route exact path="/drama" component={Drama} />
          <Route exact path="/fantasy" component={Fantasy} />
          <Route exact path="/horror" component={Horror} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
