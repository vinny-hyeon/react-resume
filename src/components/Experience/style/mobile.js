import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  position: relative;
  margin: 10px;
  margin-top: 10px;
  padding: 30px;
  width: ${window.innerWidth};
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
  .device {
    flex-direction: column !important;
  }
  .leftContainer {
  }
  .rightContainer {
  }
  .title {
    font-weight: bold;
    font-size: 15px;
  }

  .pictureContainer {
    flex-direction: column;
    text-align: center;
  }
  .picture {
    width: 90%;
    height: 300px;
  }
  i {
    font-size: 40px;
  }
  .Arrow {
    background-color: white;
    margin-top: 10px;
    cursor: pointer;
  }
  .Arrow:focus {
    background-color: white;
  }
  .Arrow:hover {
    background-color: white;
  }
  .result {
    font-size: 15px;
    font-weight: bold;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  margin-left: 10px;
  letter-spacing: 0.5px;
  .content {
    margin-top: 5px;
  }
`;

export const mobileStyle = {
  ExperienceContainer,
  ContentContainer,
};
