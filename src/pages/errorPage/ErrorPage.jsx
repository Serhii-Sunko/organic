import React from "react";
import { ErrorPageHeroWrap, ErrorTextWrap, HomeLink } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <ErrorPageHeroWrap>
      <ErrorTextWrap>
        <h2>404</h2>
        <h3>Page not found</h3>
        <p>The page you are looking for doesn't exist or has been moved</p>
        <HomeLink to={"/"}>Go to Homepage</HomeLink>
      </ErrorTextWrap>
    </ErrorPageHeroWrap>
  );
};

export default ErrorPage;
