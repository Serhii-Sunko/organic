import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "./Layout.styled";
import PreFooter from "../preFooter/PreFooter";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div>
        <Outlet />
      </div>
      <Container>
        <PreFooter />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
