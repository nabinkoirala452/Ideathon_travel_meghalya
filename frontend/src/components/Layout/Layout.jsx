import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../router/Router";
import Chatbot from '../chatbot/chatbot';

const Layout = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
