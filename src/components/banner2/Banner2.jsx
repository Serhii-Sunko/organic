import React from "react";
import {
  Banner2Section,
  BannerOne,
  BannerTwo,
  BannerThree,
} from "./banner2.styled";

const Banner2 = () => {
  return (
    <Banner2Section>
      <BannerOne>
        <p>Organic Juice</p>
      </BannerOne>
      <BannerTwo>
        <p>Organic Food</p>
      </BannerTwo>
      <BannerThree>
        <p>Nuts Cookis</p>
      </BannerThree>
    </Banner2Section>
  );
};

export default Banner2;
