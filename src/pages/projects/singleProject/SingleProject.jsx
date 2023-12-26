import React from "react";
import { useParams } from "react-router-dom";
import { porfolios } from "../../../helpers/portfolio";
import { SingleProjImgWrap, SingleProjInfoWrap } from "./SingleProject.styled";
import ProjectsDescription from "../../../components/projectComponents/projDescript/ProjectsDescription";

const SingleProject = () => {
  const { id } = useParams();
  const porfolio = porfolios[id];

  return (
    <section>
      <SingleProjImgWrap>
        <img src={porfolio.bigImage} alt={porfolio.title} />
      </SingleProjImgWrap>
      <SingleProjInfoWrap>
        <div>
          <h2>{porfolio.title}</h2>
          <p>{porfolio.text}</p>
        </div>
        <div>
          <ul>
            <li>
              <h5>Date :</h5>
              <h6>{porfolio.date}</h6>
            </li>
            <li>
              <h5>Client :</h5>
              <h6>{porfolio.client}</h6>
            </li>
            <li>
              <h5>Date :</h5>
              <h6>{porfolio.category}</h6>
            </li>
            <li>
              <h5>Service :</h5>
              <h6>{porfolio.service}</h6>
            </li>
          </ul>
        </div>
      </SingleProjInfoWrap>
      <ProjectsDescription />
    </section>
  );
};

export default SingleProject;
