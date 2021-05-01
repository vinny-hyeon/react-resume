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

const SkillContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  .skill {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .description {
    flex: 1;
    flex-direction: column;
    text-align: left;
  }
  .content {
    text-align: left;
  }
`;

export const mobileStyle = {
  StyleContainer,
  SkillContainer,
};
