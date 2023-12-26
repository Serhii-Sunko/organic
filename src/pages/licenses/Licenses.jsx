import React from "react";
import {
  LicensesTitleWrap,
  LicensesContainer,
  LicensList,
  LicensItem,
} from "./Licenses.styled";
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";

const Licenses = () => {
  return (
    <section>
      <LicensesTitleWrap>
        <img src={left} alt="left-svg" />
        <h2>Licenses</h2>
        <img src={right} alt="right-svg" />
      </LicensesTitleWrap>
      <LicensesContainer>
        <LicensList>
          <LicensItem>
            <div>
              <h4>Icon & Graphics</h4>
            </div>
            <div>
              <p>
                Icons and Graphics are manually designed by the VictorFlow
                Templates team. You may download these and edit them to fit your
                website without asking for permission or providing credit.
                <br />
                <br />
                Upon purchasing Software UI Kit Template our team grants you a
                nonexclusive, worldwide copyright license to download, copy,
                modify, and use the icons.
              </p>
            </div>
          </LicensItem>
          <LicensItem>
            <div>
              <h4>Photography</h4>
            </div>
            <div>
              <p>
                All images used in the Organick Webflow Template are licensed
                for free personal and commercial use. If you'd like to use any
                specific image, you can check the licenses and download the
                images for free on Unsplash, Pexels. And Freepik.
              </p>
              <h5>Unsplash</h5>
              <p>
                Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
                14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20,
                Image 21, Image 22, Image 23, Image 24, Image 25,
              </p>
              <h5>Pixcel</h5>
              <p>
                Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
                14, Image 15, Image 16, Image 17.
              </p>
            </div>
          </LicensItem>
          <LicensItem>
            <div>
              <h4>Font</h4>
            </div>
            <div>
              <p>
                Organick template uses free licensed Google Fonts. Please check
                Roboto, Yellowtail and Open Sans.
              </p>
            </div>
          </LicensItem>
        </LicensList>
      </LicensesContainer>
    </section>
  );
};

export default Licenses;
