import React from "react";
import circle from "../../../assets/img/about/kryg.svg";
import {
  ChoseeContainer,
  ChoseeInfoWrap,
  ChoseeText,
  ChoseeImgWrap,
  ChoseeSection,
  ChoseeImgContainer,
} from "./AboutChosee.styled";
import img1 from "../../../assets/img/about/telezhka.svg";
import img2 from "../../../assets/img/about/clock.svg";
import img3 from "../../../assets/img/about/leaf.svg";
import img4 from "../../../assets/img/about/card.svg";

const AboutChosee = () => {
  return (
    <ChoseeSection>
      <ChoseeContainer>
        <ChoseeInfoWrap>
          <h4>Why Choose us?</h4>
          <h3>We do not buy from the open market & traders.</h3>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <ul>
            <li>
              <div>
                <img src={circle} alt="circle" />
                <h5>100% Natural Product</h5>
              </div>
              <ChoseeText>
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </ChoseeText>
            </li>
            <li>
              <div>
                <img src={circle} alt="circle" />
                <h5>Increases resistance</h5>
              </div>
              <ChoseeText>
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </ChoseeText>
            </li>
          </ul>
        </ChoseeInfoWrap>
        <ChoseeImgWrap></ChoseeImgWrap>
      </ChoseeContainer>
      <ChoseeImgContainer>
        <ul>
          <li>
            <span>
              <img src={img1} alt="img1" />
            </span>
            <h4>Return Policy</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </li>
          <li>
            <span>
              <img src={img2} alt="img2" />
            </span>
            <h4>100% Fresh</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </li>
          <li>
            <span>
              <img src={img3} alt="img3" />
            </span>
            <h4>Support 24/7</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </li>
          <li>
            <span>
              <img src={img4} alt="img4" />
            </span>
            <h4>Secured Payment</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </li>
        </ul>
      </ChoseeImgContainer>
    </ChoseeSection>
  );
};

export default AboutChosee;
