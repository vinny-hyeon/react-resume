import React, { useState } from "react";
import styled from "styled-components";
import Skill from "./Skill";
import { Mobile, PC } from "../../hook/mediaQuery";
import { mobileStyle } from "./style/mobile";

const StlyeContainer = styled.div`
  margin-left: 100px;
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px;
  width: 1000px;
  height: 500px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
`;

function SkillContainer(props) {
  return (
    <div ref={(el) => (props.focusTarget.current[props.targetIndex] = el)}>
      <PC>
        <StlyeContainer>
          <h1>Skill</h1>
          <Skill focusTarget={props.focusTarget} />
        </StlyeContainer>
      </PC>
      <Mobile>
        <StlyeContainer>
          <h1>Skill</h1>
          <Skill focusTarget={props.focusTarget} />
        </StlyeContainer>
      </Mobile>
    </div>
  );
}

export default SkillContainer;
