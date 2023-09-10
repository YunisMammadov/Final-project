import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer"
import Our_features from "./our_features/Our_features";

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
