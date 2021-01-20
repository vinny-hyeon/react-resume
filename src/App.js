import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Progressbar from "./hoc/Progress/Progressbar";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";
import { menus } from "./myInfo/_menubar";

function App() {
  const focusTarget = useRef([]);
  const menusTop = [];

  useEffect(() => {
    // 완성되면 i < 3 => i < menus.length로 고치면 됨
    for (let i = 0; i < 3; i++) {
      menusTop.push(
        focusTarget.current[i].offsetTop +
          focusTarget.current[i].offsetParent.offsetTop
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
    <div>
      <Progressbar menusTop={menusTop} />
      <Menubar handleChange={handleChange} />
      <Page focusTarget={focusTarget} />
    </div>
  );
}

export default App;
