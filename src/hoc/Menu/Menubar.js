import React, { useState } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 560px;
  background-color: #efefef;
  height: 120px;
  left: 50%;
  padding: 15px 30px;
  padding-bottom: 10px;
  transform: translateX(-50%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

function Menubar(props) {
  const menus = [
    {
      icon: "user",
      color: "black",
      text: "Intro",
    },
    {
      icon: "react",
      color: "#5CD3F3",
      text: "ReactJS",
    },
    {
      icon: "mobile",
      color: "#87BF00",
      text: "ReactNative",
    },
    {
      icon: "coffee",
      color: "#DE6800",
      text: "C++",
    },
  ];

  const renderMenus = (arr) => {
    return arr.map((menu, idx) => (
      <MenuButton
        showPage={props.showPage}
        key={idx}
        icon={menu.icon}
        color={menu.color}
        text={menu.text}
        index={idx}
      />
    ));
  };

  return <Menu>{renderMenus(menus)}</Menu>;
}

export default Menubar;
