import React from "react";
import {
  ContactUsFormWrap,
  FirstInputs,
  SecondInputs,
  ThreeInput,
  ButtonWrap,
} from "./ContactUsForm.styled";

const ContactUsForm = () => {
  return (
    <ContactUsFormWrap>
      <FirstInputs>
        <label htmlFor="name">
          Full Name*
          <input type="text" placeholder="Your Email Address" />
        </label>
        <label htmlFor="email">
          Your Email*
          <input type="text" placeholder="example@yourmail.com" />
        </label>
      </FirstInputs>
      <SecondInputs>
        <label htmlFor="company">
          Company*
          <input type="text" placeholder="yourcompany name here" />
        </label>
        <label htmlFor="subject">
          Subject*
          <input type="text" placeholder="how can we help" />
        </label>
      </SecondInputs>
      <ThreeInput>
        <label htmlFor="message">
          Message*
          <textarea
            type="text"
            placeholder="hello there,i would like to talk about how to..."
          />
          <ButtonWrap>
            <button>Send Message</button>
          </ButtonWrap>
        </label>
      </ThreeInput>
    </ContactUsFormWrap>
  );
};

export default ContactUsForm;
