import React from "react";
import { Route, Link } from "react-router-dom";

import styled from "styled-components";

const SkillContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  .skill {
    flex: 1;
    flex-direction: column;
  }
  .description {
    flex: 1;
    flex-direction: column;
    text-align: center;
  }
`;

function NBack() {
  return <div>NBack</div>;
}

export default NBack;
