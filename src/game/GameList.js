import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";
import CatchCat from "./CatchCat";
import NBack from "./NBack";

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
        <Link to="nBack" style={{ marginRight: 50 }}>
          nBack
        </Link>
        <Link to="catchCat">catchCat</Link>
        <Routes>
          <Route path="/nBack" element={<NBack />}></Route>
          <Route path="/catchCat" element={<CatchCat />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default GameList;
