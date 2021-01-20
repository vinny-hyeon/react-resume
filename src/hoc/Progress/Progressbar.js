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
  return (
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100
  );
}

function Progressbar(props) {
  const [percent, setPercent] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [color, setColor] = useState("black");

  const handleScroll = () => {
    setPercent(getCurrentScrollPercentage());
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY < props.menusTop[1]) setColor("black");
    else if (window.scrollY < props.menusTop[2]) setColor("olive");
    else setColor("teal");
    // else if (window.scrollY < props.menusTop[3]) setColor("teal");
    // else setColor("orange")

    if (percent > 99) setIsActive(false);
    else setIsActive(true);
  }, [percent]);
  return (
    <ProgressContainer>
      <Progress
        percent={percent}
        active={isActive}
        success={!isActive}
        size="small"
        color={color}
      />
    </ProgressContainer>
  );
}

export default Progressbar;
