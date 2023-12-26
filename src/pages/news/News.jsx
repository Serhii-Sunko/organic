import React from "react";
import { NewsWrap } from "./News.styled";
import NewHero from "../../components/newComponent/newsHero/NewHero";
import { tidings } from "../../helpers/news";
import { NewListWrap } from "../HomePage/HomePage.styled";
import News from "../../components/newComponent/News";

const Tidings = () => {
  return (
    <section>
      <NewHero />
      <NewsWrap>
        <NewListWrap>
          {tidings?.map((tiding, id) => {
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
      </NewsWrap>
    </section>
  );
};

export default Tidings;
