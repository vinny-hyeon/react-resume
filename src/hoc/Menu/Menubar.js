import React, { useState } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { menus } from "../../myInfo/_menubar";

const Menu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  width: 120px;
  background-color: #efefef;
  height: 560px;
  top: 50%;
  padding: 30px 15px;
  padding-right: 15px;
  margin-right: 100px;
  transform: translateY(-50%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

function Menubar(props) {
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
