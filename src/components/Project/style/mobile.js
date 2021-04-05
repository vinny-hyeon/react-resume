import React from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  position: relative;
  margin: 10px;
  margin-top: 10px;
  width: ${window.innerWidth};
  padding: 20px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
`;

const ProjectContainer = styled.div`
  margin-left: 10px;
  .period,
  .linkTitle {
    font-weight: bold;
    font-size: 20px;
    color: #888c89;
  }
  i {
    font-size: 25px;
  }
  i:hover {
    font-size: 27px;
  }
  hr {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const mobileStyle = {
  StyleContainer,
  ProjectContainer,
};
