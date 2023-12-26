import React from "react";
import {
  NewsItemWrap,
  NewsImg,
  NewsLink,
  NewInfoWrap,
  PersonWrap,
  NewsContent,
} from "./News.styled";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import person from "../../assets/img/person.svg";

const News = ({ id, date, image, author, title, text }) => {
  return (
    <NewsContent>
      <NewsItemWrap>
        {/* <h5>{date}</h5> */}
        <NewsImg src={image} alt={title} />
        <NewInfoWrap>
          <PersonWrap>
            <img src={person} alt="person" />
            <h4>{author}</h4>
          </PersonWrap>
          <h3>{title}</h3>
          <p>{text}</p>
          <NewsLink to={`/news/${id}`}>
            <span>
              Read More <BsFillArrowRightCircleFill />
            </span>
          </NewsLink>
        </NewInfoWrap>
      </NewsItemWrap>
    </NewsContent>
  );
};

export default News;
