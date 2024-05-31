// import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import Footer from "./components/footer"

function Layout() {
  return (
    <>
    <NavbarComponent/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;