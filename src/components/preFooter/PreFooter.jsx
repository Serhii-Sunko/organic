import React from "react";
import { PreFooterContainer, InputWrap } from "./PreFooter.styled";

const PreFooter = () => {
  return (
    <div>
      <PreFooterContainer>
        <div>
          <h2>
            Subscribe to <br /> our Newsletter
          </h2>
        </div>
        <InputWrap>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Subscribe</button>
        </InputWrap>
      </PreFooterContainer>
    </div>
  );
};

export default PreFooter;
