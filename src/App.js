import React from "react";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
