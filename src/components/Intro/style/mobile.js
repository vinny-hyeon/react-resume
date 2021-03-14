import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  position: relative;
  margin: 10px;
  width: ${window.innerWidth};
  padding: 20px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
  .me {
    width: 150px;
    height: 200px;
    border: 5px solid #555;
  }
  .name {
    font-size: 24px;
    margin-top: 15px;
    font-weight: bold;
  }
  .job {
    color: #aaa;
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    letter-spacing: 0.9px;
  }
  .intro {
    margin-top: 15px;
    justify-content: center;
    align-items: center;
  }
  .label {
    font-weight: bold;
    text-align: left;
  }
  .content {
    text-align: left;
  }
`;

const IconsBox = styled.div`
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #555;
  padding: 20px 0;
  i {
    font-size: 40px;
    color: white;
  }
  .myicon {
    cursor: pointer;
    transition: 0.5s;
  }
  .github:hover {
    color: #302f2f;
  }
  .facebook:hover {
    color: #4064ac;
  }
  .google:hover {
    color: #ad2f20;
  }
  .blog:hover {
    color: #00c73c;
  }
`;

export const mobileStyle = {
  IntroContainer,
  IconsBox,
};
