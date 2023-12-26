import React from "react";
import {
  ContactUsHeroWrap,
  LocationWrap,
  InfoFlexTwo,
} from "./ContactInfoTwo.styled";
import { HiLocationMarker } from "react-icons/hi";

const ContactInfoTwo = () => {
  return (
    <ContactUsHeroWrap>
      <LocationWrap>
        <h4>Location</h4>
        <h2>Our Farms</h2>
        <p>
          Established fact that a reader will be distracted by the readable
          content of a page when looking a layout. The point of using.
        </p>
        <div>
          <InfoFlexTwo>
            <div>
              <HiLocationMarker size={75} />
            </div>
            <div>
              <h5>New York, USA:</h5>
              <span>299 Park Avenue New York, New York 10171</span>
            </div>
          </InfoFlexTwo>
          <InfoFlexTwo>
            <div>
              <HiLocationMarker size={75} />
            </div>
            <div>
              <h5>London, UK:</h5>
              <span>30 Stamford Street, London SE1 9LQ</span>
            </div>
          </InfoFlexTwo>
        </div>
      </LocationWrap>
    </ContactUsHeroWrap>
  );
};

export default ContactInfoTwo;
