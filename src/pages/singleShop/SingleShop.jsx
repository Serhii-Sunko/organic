import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../helpers/products";
import SingleHero from "../../components/singleShopComponents/SingleHero";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  SingleProductWrap,
  ProdImgWrap,
  KindProd,
  ProdImg,
  SingleProductInfoWrap,
  SinglePriceWrap,
  InfoText,
  InputWrapper,
} from "./SingleShop.styled";
import {
  NewPrice,
  OldPrice,
} from "../../components/homeProduts/HomeProducts.styled";
import ProductDesc from "../../components/singleShopComponents/productDesc/ProductDesc";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

const SingleShop = () => {
  const { id } = useParams();
  const product = products[id];
  const items = useSelector((state) => state.cart.itemsInCart);

  const isItemsInCart = items.some((item) => item.id === product.id);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (isItemsInCart) {
      dispatch(deleteItemFromCart(product.id));
    } else {
      dispatch(setItemInCart(product));
    }
  };

  return (
    <div>
      <SingleHero />
      <SingleProductWrap>
        <ProdImgWrap>
          <KindProd>{product.kind}</KindProd>
          <ProdImg src={product.img} alt={product.title} />
        </ProdImgWrap>
        <SingleProductInfoWrap>
          <h4>{product.title}</h4>
          <img src={product.quality} alt="stars" />
          <SinglePriceWrap>
            <OldPrice>{product.oldPrice}$</OldPrice>
            <NewPrice>{product.newPrice}$</NewPrice>
          </SinglePriceWrap>
          <InfoText>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </InfoText>
          <InputWrapper>
            {/* <p>Quantity : </p>
            <input type="number" /> */}
            <button onClick={handleClick}>
              {isItemsInCart ? (
                <span>Delete From Cart</span>
              ) : (
                <span>Add To Cart</span>
              )}
            </button>
          </InputWrapper>
        </SingleProductInfoWrap>
      </SingleProductWrap>
      <ProductDesc />
    </div>
  );
};

export default SingleShop;
