import React from "react";
import {
  ServiceInfoWrap,
  ServiceInfoContainer,
  ListOne,
  ListTwo,
  ProductImg,
} from "./ServiceInfo.styled";
import img1 from "../../../assets/img/Service/milk.svg";
import img2 from "../../../assets/img/Service/store.svg";
import img3 from "../../../assets/img/Service/delivery.svg";
import img4 from "../../../assets/img/Service/agricultural.svg";
import img5 from "../../../assets/img/Service/organic.svg";
import img6 from "../../../assets/img/Service/fresh.svg";
import img7 from "../../../assets/img/Service/ServiceProd.png";

const ServiceInfo = () => {
  return (
    <section>
      <ServiceInfoWrap>
        <div>
          <h4>What we Grow</h4>
          <h2>
            Better Agriculture for <br /> Better Future
          </h2>
        </div>
        <ServiceInfoContainer>
          <ListOne>
            <li>
              <img src={img1} alt="milk" />
              <h5>Dairy Products</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </li>
            <li>
              <img src={img2} alt="store" />
              <h5>Store Services</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium Sed ut perspiciatis.
              </p>
            </li>
            <li>
              <img src={img3} alt="delivery" />
              <h5>Delivery Services</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </li>
          </ListOne>
          <ProductImg src={img7} alt="product" />
          <ListTwo>
            <li>
              <img src={img4} alt="agricultural" />
              <h5>Agricultural Services</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </li>
            <li>
              <img src={img5} alt="organic" />
              <h5>Organic Products</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium Sed ut perspiciatis.
              </p>
            </li>
            <li>
              <img src={img6} alt="fresh" />
              <h5>Fresh Vegetables</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </li>
          </ListTwo>
        </ServiceInfoContainer>
      </ServiceInfoWrap>
    </section>
  );
};

export default ServiceInfo;
