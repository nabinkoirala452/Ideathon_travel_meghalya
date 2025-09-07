import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../router/Router";
import RightSideButtons from "../RighSideButtons/RightSideButtons" 

const Layout = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
      <RightSideButtons/>
    </div>
  );
};

export default Layout;
