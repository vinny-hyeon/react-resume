import React from "react";
import Project from "./Project";
import styled from "styled-components";
import { Mobile, PC } from "../../hook/mediaQuery";
import { mobileStyle } from "./style/mobile";

const StyleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px;
  width: 1000px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
`;

function ProjectContainer(props) {
  return (
    <div ref={(el) => (props.focusTarget.current[props.targetIndex] = el)}>
      <PC>
        <StyleContainer>
          <h1>Project</h1>
          <Project focusTarget={props.focusTarget} tech="ReactNative" />
          <Project focusTarget={props.focusTarget} tech="React" />
        </StyleContainer>
      </PC>
      <Mobile>
        <mobileStyle.StyleContainer>
          <h1>Project</h1>
          <Project focusTarget={props.focusTarget} tech="ReactNative" />
          <Project focusTarget={props.focusTarget} tech="React" />
        </mobileStyle.StyleContainer>
      </Mobile>
    </div>
  );
}

export default ProjectContainer;
