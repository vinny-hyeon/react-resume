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
    margin-top: 10px;
  }

  .title {
    font-weight: bold;
    font-size: 20px;
  }

  .pictureContainer {
    flex-direction: column;
    text-align: center;
  }
  .picture {
    width: 90%;
    height: 200px;
  }
  i {
    font-size: 30px;
  }
  .Arrow {
    background-color: white;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
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
  .domainLink {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
`;

const ContentContainer = styled.div`
  letter-spacing: 0.5px;
  margin-top: -30px;
  .content {
    margin-top: 5px;
  }
`;

export const mobileStyle = {
  ExperienceContainer,
  ContentContainer,
};
