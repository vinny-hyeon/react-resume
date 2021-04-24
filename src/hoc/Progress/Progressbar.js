import React, { useState, useEffect } from "react";
import { Progress } from "semantic-ui-react";
import styled from "styled-components";
import colors from "styles/Colors/ColorsLightMode";

const ProgressContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  transform-origin: left;
  /* -ms-transform: rotate(90deg); // IE 9 이상에서 사용
  -webkit-transform: rotate(90deg); // 사파리, 크롬, 오페라 브라우저 사용
  transform: rotate(90deg); */
`;

const MobileProgressContainer = styled.div`
  position: fixed;
  width: 90%;
  margin-left: 5%;
  z-index: 100;
  transform-origin: left;
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
  const isMobile = props.device === "mobile";

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
    if (window.scrollY + 50 < props.menusTop[1]) {
      setColor(colors.introColor);
    } else if (window.scrollY + 50 < props.menusTop[2]) {
      setColor(colors.skillColor);
    } else if (window.scrollY + 50 < props.menusTop[3]) {
      setColor(colors.projectColor);
    } else {
      setColor(colors.experienceColor);
    }

    if (percent > 99) setIsActive(false);
    else setIsActive(true);
  }, [percent]);
  if (!isMobile) {
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
  } else {
    return (
      <MobileProgressContainer>
        <Progress
          percent={percent}
          active={isActive}
          success={!isActive}
          size="small"
          color={color}
        />
      </MobileProgressContainer>
    );
  }
}

export default Progressbar;
