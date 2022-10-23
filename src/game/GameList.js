import React from "react";
import { Link } from "react-router-dom";

function GameList() {
  return (
    <div>
      <header style={{ padding: 30 }}>
        <h1>짱 귀여운 송히송히의 즐거운 게임시간! 하나 둘!</h1>
        <Link to="/nBack" style={{ marginRight: 50 }}>
          nBack
        </Link>
        <Link to="/catchCat">catchCat</Link>
      </header>
    </div>
  );
}

export default GameList;
