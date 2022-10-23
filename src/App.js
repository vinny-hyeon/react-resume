import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Progressbar from "./hoc/Progress/Progressbar";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";
import { menus } from "./myInfo/_menubar";
import { Mobile, PC, PCwithMenubar } from "./hook/mediaQuery";
import GameList from "game/GameList";
import NBack from "game/NBack";
import CatchCat from "game/CatchCat";

function App() {
  const focusTarget = useRef([]);
  const menusTop = [];

  useEffect(() => {
    for (let i = 0; i < menus.length; i++) {
      menusTop.push(
        focusTarget.current[i]?.offsetTop +
          focusTarget.current[i]?.offsetParent.offsetTop
      );
    }
  }, []);

  const scrollToRef = (value) => {
    let obj = {};
    menus.forEach((ele, idx) => {
      obj[ele["text"]] = idx;
    });

    focusTarget.current[obj[value]].scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleChange = (value) => {
    scrollToRef(value);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/game">Play Game</Link>
                <PC>
                  <Progressbar menusTop={menusTop} device="pc" />
                  <PCwithMenubar>
                    <Menubar handleChange={handleChange} />
                  </PCwithMenubar>
                </PC>
                <Mobile>
                  <Progressbar menusTop={menusTop} device="mobile" />
                </Mobile>
                <Page focusTarget={focusTarget} />
              </>
            }
          ></Route>
          <Route path="/game" element={<GameList />}></Route>
          <Route path="/nBack" element={<NBack />}></Route>
          <Route path="/catchCat" element={<CatchCat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
