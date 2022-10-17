import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

import "./App.css";

const App = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/gallery" element={< Gallery />} /> */}
    </Routes>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
