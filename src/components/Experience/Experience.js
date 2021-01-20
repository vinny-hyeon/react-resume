import React from "react";
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

function Experience(props) {
  return (
    <div ref={(el) => (props.focusTarget.current[3] = el)}>
      <StyleContainer>
        <h1>Experience</h1>
      </StyleContainer>
    </div>
  );
}

export default Experience;
