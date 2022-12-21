import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
// import Home from "./componensts/Home/Home";
import Home from "./components/Home/Home";

import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import LandingPage from "./components/LandingPage/LandingPage";
import Lunch from "./components/Menu/Menus/Lunch";
import Diner from "./components/Menu/Menus/Dinner";
import Breakfast from "./components/Menu/Menus/Breakfast";

import "./App.css";

const App = () => {
  const routes = (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/menu" element={<Menu />} />

      <Route path="/menu/*" element={<Menu />} />
    </Routes>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
