import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"
import Our_features from "./Our_features";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Our_features />
      <Footer />
    </>
  );
}

export default Layout;
