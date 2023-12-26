import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  ProductsWrap,
  ShopCategoriesContainer,
} from "../../../pages/shopPage/Shop.styled";
import { products } from "../../../helpers/products";
import HomeProducts from "../../homeProduts/HomeProducts";
import { RecomTitle } from "./recomProd.styled";

const itemsPerRow = 4;

const RecomProd = () => {
  const [next] = useState(itemsPerRow);

  return (
    <ShopCategoriesContainer>
      <RecomTitle>Related Products</RecomTitle>
      {/* <Link to={`/shop/${id}`}> */}
      <ProductsWrap>
        {products
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          ?.slice(0, next)
          ?.map((product, id) => {
            return (
              <HomeProducts
                key={id}
                kind={product.kind}
                img={product.img}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                quality={product.quality}
                id={id}
              ></HomeProducts>
            );
          })}
      </ProductsWrap>
      {/* </Link> */}
    </ShopCategoriesContainer>
  );
};

export default RecomProd;
