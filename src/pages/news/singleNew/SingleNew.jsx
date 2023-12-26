import React from "react";
import { useParams } from "react-router-dom";
import { tidings } from "../../../helpers/news";
import {
  SingleNewImgWrap,
  SingleNewInfoWrap,
  PostDateWrap,
  TitleWrap,
  TextWrap,
} from "./SingleNew.styled";
import NewsInfo from "../../../components/newComponent/newsInfo/NewsInfo";

const SingleNew = () => {
  const { id } = useParams();
  const tiding = tidings[id];

  return (
    <div>
      <SingleNewImgWrap>
        <img src={tiding.bigImge} alt="das" />
      </SingleNewImgWrap>
      <SingleNewInfoWrap>
        <PostDateWrap>
          <p>Posted On:</p>
          <p>{tiding.date}</p>
          <h5>{tiding.author}</h5>
        </PostDateWrap>
        <TitleWrap>
          <h3>{tiding.title}</h3>
        </TitleWrap>
        <TextWrap>
          <p>{tiding.bigText}</p>
        </TextWrap>
      </SingleNewInfoWrap>
      <NewsInfo />
    </div>
  );
};

export default SingleNew;
