import React from "react";
import {
  TestimonialSection,
  HomeCategoriesContainer,
  Face,
  PreTitle,
  SlideContainer,
  Star,
  Text,
  Name,
  Client,
  AdvantagesList,
} from "./Testimonial.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from "../../assets/img/man2.png";
import img2 from "../../assets/img/men1.png";
import img3 from "../../assets/img/girl1.png";
import img4 from "../../assets/img/girl2.png";
import stars from "../../assets/products/Star.png";

const Testimonial = () => {
  return (
    <TestimonialSection>
      <HomeCategoriesContainer>
        <PreTitle>Testimonial</PreTitle>
        <h2>What Our Customer Saying?</h2>
        <div>
          <Splide
            options={{
              perPage: 1,
              arrows: true,
              pagination: false,
              drag: "free",
              rewind: true,
              width: 700,
              breakpoints: {
                674: { perPage: 1, width: 600 },
                420: { perPage: 1, width: 400 },
              },
            }}
          >
            <SplideSlide>
              <SlideContainer>
                <Face src={img4} alt="img4" />
                <Star src={stars} alt="start" />
                <Text>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </Text>
                <Name>Sara Taylor</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
            <SplideSlide>
              <SlideContainer>
                <Face src={img2} alt="img2" />
                <Star src={stars} alt="start" />
                <Text>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </Text>
                <Name>Andy Petty</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
            <SplideSlide>
              <SlideContainer>
                <Face src={img3} alt="img3" />
                <Star src={stars} alt="start" />
                <Text>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </Text>
                <Name>Diana Bright</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
            <SplideSlide>
              <SlideContainer>
                <Face src={img1} alt="img1" />
                <Star src={stars} alt="start" />
                <Text>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </Text>
                <Name>Misha Kein</Name>
                <Client>Consumer</Client>
              </SlideContainer>
            </SplideSlide>
          </Splide>
        </div>
        <div>
          <AdvantagesList>
            <li>
              <h5>100%</h5>
              <p>Organic</p>
            </li>
            <li>
              <h5>285</h5>
              <p>Active Product</p>
            </li>
            <li>
              <h5>350+</h5>
              <p>Organic Orchads</p>
            </li>
            <li>
              <h5>25+</h5>
              <p>Years of Farming</p>
            </li>
          </AdvantagesList>
        </div>
      </HomeCategoriesContainer>
    </TestimonialSection>
  );
};

export default Testimonial;
