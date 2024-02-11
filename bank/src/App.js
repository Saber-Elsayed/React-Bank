import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import Breakdown from "./components/Breakdown";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Transactions} />
          <Route path="/operations" component={Operations} />
          <Route path="/breakdown" component={Breakdown} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
