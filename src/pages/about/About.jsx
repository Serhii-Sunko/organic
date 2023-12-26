import React from "react";
import AboutHero from "../../components/about/aboutComponent/AboutHero";
import AboutInfo from "../../components/about/aboutInfo/AboutInfo";
import AboutChosee from "../../components/about/aboutChosee/AboutChosee";
import AboutTeam from "../../components/about/aboutTeam/AboutTeam";
import AboutUsBanner from "../../components/about/aboutUsBanner/AboutUsBanner";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutInfo />
      <AboutChosee />
      <AboutTeam />
      <AboutUsBanner />
    </div>
  );
};

export default About;
