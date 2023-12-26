import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  OfferSection,
  OffersContainer,
  TextWrap,
  OfferWrapContainer,
  OfferLink,
} from "./Offer.styled";
import { AboutUsBannerContainer } from "../about/aboutUsBanner/aboutUsBanner.styled";
import spicy from "../../assets/img/about/spicy.png";
import nutsfeesd from "../../assets/img/about/NutsFeesd.png";
import fruits from "../../assets/products/banan.png";
import vegetable from "../../assets/products/broccol.png";

const Offer = () => {
  return (
    <OfferSection>
      <OfferWrapContainer>
        <OffersContainer>
          <TextWrap>
            <p>Offer</p>
            <h3>We Offer Organic For You</h3>
          </TextWrap>
          <OfferLink to="/shop">
            <span>
              View All Product <BsFillArrowRightCircleFill size={19} />
            </span>
          </OfferLink>
        </OffersContainer>
        <AboutUsBannerContainer>
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
      </OfferWrapContainer>
    </OfferSection>
  );
};

export default Offer;
