import React from "react";
import ServiceHero from "../../components/serviceComponent/serviceHero/ServiceHero";
import ServiceInfo from "../../components/serviceComponent/serviceInfo/ServiceInfo";
import OrganicOnly from "../../components/serviceComponent/organicOnly/OrganicOnly";

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceInfo />
      <OrganicOnly />
    </div>
  );
};

export default Services;
