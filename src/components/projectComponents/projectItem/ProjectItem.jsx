import React from "react";
import { PortfolioWrap } from "./ProjectItem.styled";
import { NavLink } from "react-router-dom";

const ProjectItem = ({ id, view, image, title }) => {
  return (
    <div>
      <NavLink to={`/projects/${id}`}>
        <PortfolioWrap>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{view}</p>
        </PortfolioWrap>
      </NavLink>
    </div>
  );
};

export default ProjectItem;
