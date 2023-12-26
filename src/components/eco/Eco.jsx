import React from "react";
import { EcoSection, EcoWrap } from "./Eco.styled";

const Eco = () => {
  return (
    <EcoSection>
      <EcoWrap>
        <h5>Eco Friendly</h5>
        <h2>
          Econis is a Friendly <br /> Organic Store
        </h2>
        <ul>
          <li>
            <h4>Start with Our Company First</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </li>
          <li>
            <h4>Learn How to Grow Yourself</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </li>
          <li>
            <h4>Farming Strategies of Today</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </li>
        </ul>
      </EcoWrap>
    </EcoSection>
  );
};

export default Eco;
