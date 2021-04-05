import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Progressbar from "./hoc/Progress/Progressbar";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";
import { menus } from "./myInfo/_menubar";
import { Mobile, PC } from "./hook/mediaQuery";

function App() {
  const focusTarget = useRef([]);
  const menusTop = [];

  useEffect(() => {
    for (let i = 0; i < menus.length; i++) {
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
      <PC>
        <Progressbar menusTop={menusTop} device="pc" />
        <Menubar handleChange={handleChange} />
      </PC>
      <Mobile>
        <Progressbar menusTop={menusTop} device="mobile" />
      </Mobile>
      <Page focusTarget={focusTarget} />
    </div>
  );
}

export default App;
