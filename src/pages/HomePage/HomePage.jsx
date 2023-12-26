import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Testimonial from "../../components/testimonial/Testimonial";
import Offer from "../../components/offer/Offer";
import Eco from "../../components/eco/Eco";
import Banner2 from "../../components/banner2/Banner2";
import { products } from "../../helpers/products";
import { tidings } from "../../helpers/news";
import HomeProducts from "../../components/homeProduts/HomeProducts";
import News from "../../components/newComponent/News";
import {
  HomeCategoriesContainer,
  ProductsWrap,
  Categories,
  Button,
  NewsMoreLink,
  HomeNewsContainer,
  NewsWrap,
  NewListWrap,
  NewPreTitle,
  NewsTitle,
} from "./HomePage.styled";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const itemsPerRow = 8;

const HomePage = () => {
  const [next, setNext] = useState(itemsPerRow);

  const handleMore = () => {
    setNext(next + itemsPerRow);
  };

  return (
    <div>
      <Hero />
      <Banner />
      <About />
      <HomeCategoriesContainer>
        <Categories>Categories</Categories>
        <h2>Our Products</h2>
        <ProductsWrap>
          {products?.slice(0, next)?.map((product, id) => {
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
        <Button onClick={handleMore}>
          Load More <BsFillArrowRightCircleFill size={19} />
        </Button>
      </HomeCategoriesContainer>
      <Testimonial />
      <Offer />
      <Eco />
      <Banner2 />
      <HomeNewsContainer>
        <NewsWrap>
          <div>
            <NewPreTitle>News</NewPreTitle>
            <NewsTitle>
              Discover weekly content about <br /> organic food, & more
            </NewsTitle>
          </div>
          <NewsMoreLink to={"/news"}>
            <span>
              More News <BsFillArrowRightCircleFill />
            </span>
          </NewsMoreLink>
        </NewsWrap>
        <NewListWrap>
          {tidings?.slice(0, 2)?.map((tiding, id) => {
            return (
              <News
                key={id}
                date={tiding.date}
                image={tiding.image}
                bigImge={tiding.bigImge}
                author={tiding.author}
                title={tiding.title}
                text={tiding.text}
                bigtext={tiding.bigtext}
                id={tiding.id}
              ></News>
            );
          })}
        </NewListWrap>
      </HomeNewsContainer>
    </div>
  );
};

export default HomePage;
