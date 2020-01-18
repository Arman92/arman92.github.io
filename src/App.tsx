import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./Routes";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
