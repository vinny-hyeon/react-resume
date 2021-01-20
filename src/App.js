import React, { useState, useRef } from "react";
import styled from "styled-components";
import Progressbar from "./hoc/Progress/Progressbar";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";
import { menus } from "./myInfo/_menubar";

function App() {
  const focusTarget = useRef([]);
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
      <Progressbar />
      <Menubar handleChange={handleChange} />
      <Page focusTarget={focusTarget} />
    </div>
  );
}

export default App;
