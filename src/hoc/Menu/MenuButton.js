import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const ButtonStyle = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s;
  position: relative;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  i {
    font-size: 50px;
    transform: translateX(-10%);
    margin-top: 10px;
  }
  span {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function MenuButton(props) {
  return (
    <ButtonStyle
      onClick={() => props.showPage(props.index)}
      color={props.color}
    >
      <Icon name={props.icon} />
      <span>{props.text}</span>
    </ButtonStyle>
  );
}
export default MenuButton;
