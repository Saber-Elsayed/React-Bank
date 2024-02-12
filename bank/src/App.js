import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import Breakdown from "./components/Breakdown";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/breakdown" element={<Breakdown />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
