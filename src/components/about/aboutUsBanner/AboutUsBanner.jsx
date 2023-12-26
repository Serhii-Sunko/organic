import React from "react";
import {
  AboutUsBannerSection,
  AboutUsBannerContainer,
} from "./aboutUsBanner.styled";
import spicy from "../../../assets/img/about/spicy.png";
import nutsfeesd from "../../../assets/img/about/NutsFeesd.png";
import fruits from "../../../assets/products/banan.png";
import vegetable from "../../../assets/products/broccol.png";

const AboutUsBanner = () => {
  return (
    <AboutUsBannerSection>
      <AboutUsBannerContainer>
        <h3>About Us</h3>
        <h2>What We Offer for You</h2>
        <ul>
          <li>
            <img src={spicy} alt="spicy" />
            <p>Spicy</p>
          </li>
          <li>
            <img src={nutsfeesd} alt="nuts&feesd" />
            <p>Nuts & Feesd</p>
          </li>
          <li>
            <img src={fruits} alt="fruits" />
            <p>Fruits</p>
          </li>
          <li>
            <img src={vegetable} alt="vegetable" />
            <p>Vegetable</p>
          </li>
        </ul>
      </AboutUsBannerContainer>
    </AboutUsBannerSection>
  );
};

export default AboutUsBanner;
