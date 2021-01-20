import React, { useState, useEffect } from "react";
import { Progress } from "semantic-ui-react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  position: fixed;
  /* margin-top: 300px; */
  width: 560px;
  -ms-transform: rotate(90deg); // IE 9 이상에서 사용
  -webkit-transform: rotate(90deg); // 사파리, 크롬, 오페라 브라우저 사용
  transform: rotate(90deg);
  transform-origin: left;
  margin-left: 80px;
`;

function getCurrentScrollPercentage() {
  console.log("hi");
  return (
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100
  );
}

function Progressbar(props) {
  const [percent, setPercent] = useState(0);

  const handleScroll = () => {
    setPercent(getCurrentScrollPercentage());
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ProgressContainer>
      <Progress percent={percent} />
    </ProgressContainer>
  );
}

export default Progressbar;
