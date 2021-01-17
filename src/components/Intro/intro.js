import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../reuseable/styles";
import profile from "../../img/profile.jpg";
import { Icon } from "semantic-ui-react";
import { myInfos, linkData } from "../../myInfo/_intro";

const IntroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  width: 1000px;
  height: 440px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
  .label {
    font-weight: bold;
    text-align: right;
  }

  .me {
    width: 90%;
    height: 300px;
  }
  .job {
    color: #aaa;
    font-size: 18px;
    letter-spacing: 0.9px;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
    width: 90%;
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

function Intro(props) {
  const renderMyInfos = (arr) => {
    return arr.map((info, idx) => (
      <FlexBox>
        <div className="flex-2 label">{info.label}</div>
        <div className="flex-1">&nbsp;</div>
        <div className="flex-6" style={{ marginRight: "45px" }}>
          {info.data}
        </div>
      </FlexBox>
    ));
  };

  const renderLink = (arr) => {
    return arr.map((data, idx) => (
      <div className="flex-1">
        <a href={data.address} target="_blank">
          <Icon className={[data.domain, "myicon"]} name={data.iconName} />
        </a>
      </div>
    ));
  };

  return (
    <div ref={(el) => (props.focusTarget.current[0] = el)}>
      <IntroContainer>
        <FlexBox>
          <div className="flex-4" style={{ padding: "25px" }}>
            <img className="me" alt="프로필 사진" src={profile} />
          </div>
          <div className="flex-6" style={{ paddingTop: "30px" }}>
            <div className="job">프론트앤드 개발자</div>
            <div className="name" style={{ marginTop: "15px" }}>
              권현빈
            </div>
            <br />
            {renderMyInfos(myInfos)}
          </div>
        </FlexBox>
        <IconsBox>
          <FlexBox>
            <div className="flex-1" />
            {renderLink(linkData)}
            <div className="flex-1" />
          </FlexBox>
        </IconsBox>
      </IntroContainer>
    </div>
  );
}

export default Intro;
