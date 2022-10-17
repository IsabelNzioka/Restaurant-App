import React, { useState } from "react";

import Navbar from "../Navigation/Navibar/Navbar";
import SideDrawer from "../Navigation/Sidedrawer/SideDrawer";
import Footer from "../Navigation/Footer/Footer";

import "./Layout.css";

const Layout = (props) => {
  const [showDrawer, setShowDrawer] = useState(true);

  const closeSideDrawer = () => {
    setShowDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    // this.setState( (prevState ) => { return { showDrawer: !prevState.showDrawer };});
    setShowDrawer(!showDrawer);
  };

  return (
    <div>
      <Navbar menuToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showDrawer} closed={closeSideDrawer} />

      <main className="Content">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
