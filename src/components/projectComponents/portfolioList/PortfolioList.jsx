import React from "react";
import { porfolios } from "../../../helpers/portfolio";
import ProjectItem from "../projectItem/ProjectItem";
import { PortfolioListWrap } from "./PortfolioList.styled";

const PortfolioList = () => {
  return (
    <section>
      <PortfolioListWrap>
        <ul>
          {porfolios?.map((porfolio, id) => {
            return (
              <ProjectItem
                key={id}
                view={porfolio.view}
                image={porfolio.image}
                title={porfolio.title}
                date={porfolio.date}
                client={porfolio.client}
                category={porfolio.category}
                text={porfolio.text}
                id={id}
              ></ProjectItem>
            );
          })}
        </ul>
      </PortfolioListWrap>
    </section>
  );
};

export default PortfolioList;
