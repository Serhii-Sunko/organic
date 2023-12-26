import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/about/About";
import Shop from "../pages/shopPage/Shop";
import SingleShop from "../pages/singleShop/SingleShop";
import Services from "../pages/services/Services";
import Projects from "../pages/projects/Projects";
import SingleProject from "../pages/projects/singleProject/SingleProject";
import News from "../pages/news/News";
import SingleNew from "../pages/news/singleNew/SingleNew";
import Licenses from "../pages/licenses/Licenses";
import OurTeam from "../pages/ourTeam/OurTeam";
import ContactUs from "../pages/contactUs/ContactUs";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ConfirmOrder from "../pages/confirmOrder/ConfirmOrder";
import BuyPage from "../pages/buyPage/BuyPage";
import ScrollToTop from "../utils/scrollToTop";

const RoutserApp = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleShop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNew />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/confirm" element={<ConfirmOrder />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutserApp;
