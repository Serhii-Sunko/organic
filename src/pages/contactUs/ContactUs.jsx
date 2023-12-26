import React from "react";
import ContactUsHero from "../../components/contactUsComponents/contactHero/ContactUsHero";
import ContactUsInfo from "../../components/contactUsComponents/contactUsInfo/ContactUsInfo";
import ContactUsForm from "../../components/contactUsComponents/contactUsForm/ContactUsForm";
import ContactInfoTwo from "../../components/contactUsComponents/contactInfoTwo/ContactInfoTwo";

const ContactUs = () => {
  return (
    <div>
      <ContactUsHero />
      <ContactUsInfo />
      <ContactInfoTwo />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
