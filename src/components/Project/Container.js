import React from "react";
import Project from "./Project";
import styled from "styled-components";

const StyleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px;
  width: 1000px;
  height: 1000px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
`;

function Container(props) {
  return (
    <div>
      <StyleContainer>
        <h1>Project</h1>
        <Project focusTarget={props.focusTarget} tech="ReactNative" />
        <Project focusTarget={props.focusTarget} tech="React" />
      </StyleContainer>
    </div>
  );
}

export default Container;
