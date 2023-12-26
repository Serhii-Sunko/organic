import React from "react";
import { useParams } from "react-router-dom";
import { porfolios } from "../../../helpers/portfolio";
import { ProjectsDescriptionWrap } from "./ProjectsDescription.styled";

const ProjectsDescription = () => {
  const { id } = useParams();
  const porfolio = porfolios[id];

  return (
    <ProjectsDescriptionWrap>
      <div>
        <h3>About The Farm:</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. <br />
          <br /> Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and auncover many web sites
          still in their infancy. Various versions have evolved over the years
        </p>
        <img src={porfolio.middleImg} alt={porfolio.title} />
      </div>
      <div>
        <h3>How To Farm:</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. <br />
          <br /> Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and auncover many web sites
          still in their infancy. Various versions have evolved over the years
        </p>
      </div>
      <div>
        <h3>Conclusion:</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. <br />
          <br /> Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and auncover many web sites
          still in their infancy. Various versions have evolved over the years
        </p>
      </div>
    </ProjectsDescriptionWrap>
  );
};

export default ProjectsDescription;
