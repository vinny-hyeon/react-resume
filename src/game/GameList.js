import React from "react";
import { Link } from "react-router-dom";

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

function GameList() {
  return (
    <div>
      <header style={{ padding: 30 }}>
        <Link to="/nBack" style={{ marginRight: 50 }}>
          nBack
        </Link>
        <Link to="/catchCat">catchCat</Link>
      </header>
    </div>
  );
}

export default GameList;
