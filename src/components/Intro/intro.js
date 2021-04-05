import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../reuseable/styles";
import profile from "../../img/profile.jpg";
import mobileProfile from "../../img/profile2.jpg";
import { Flag, Icon } from "semantic-ui-react";
import { myInfos, linkData } from "../../myInfo/_intro";
import Contact from "../Contact/Contact";
import GPAModal from "./GPAModal";
import { Mobile, PC } from "../../hook/mediaQuery";
import { mobileStyle } from "./style/mobile";

const IntroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  width: 1000px;
  height: 440px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);

  .me {
    width: 90%;
    height: 300px;
  }
  .job {
    color: #aaa;
    font-size: 18px;
    font-weight: bold;
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
  .label {
    font-weight: bold;
    text-align: right;
  }

  .content {
    margin-right: 45px;
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
  const [openContactModal, setOpenContactModal] = useState(false);
  const detailGPAModal = () => {
    return <GPAModal />;
  };

  const renderContactModal = () => {
    return (
      <Contact open={openContactModal} handleChange={setOpenContactModal} />
    );
  };

  const renderMyInfos = (arr) => {
    return arr.map((info, idx) => (
      <FlexBox style={{ marginTop: 3 }}>
        <div className="flex-2 label">{info.label}</div>
        <div className="flex-1">&nbsp;</div>
        <div className="flex-6 content">
          {info.data}&nbsp;
          {info.label === "Major GPA" && detailGPAModal()}
        </div>
      </FlexBox>
    ));
  };

  const renderLink = (arr) => {
    return arr.map((data, idx) =>
      data.domain === "google" ? (
        <div
          className="flex-1"
          onClick={() => {
            setOpenContactModal(true);
          }}
        >
          <Icon className={[data.domain, "myicon"]} name={data.iconName} />
        </div>
      ) : (
        <div className="flex-1">
          <a href={data.address} target="_blank">
            <Icon className={[data.domain, "myicon"]} name={data.iconName} />
          </a>
        </div>
      )
    );
  };

  return (
    <div ref={(el) => (props.focusTarget.current[0] = el)}>
      <PC>
        {renderContactModal()}
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img className="me" alt="프로필 사진" src={profile} />
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <div className="job">Frontend Developer</div>
              <div className="name" style={{ marginTop: "15px" }}>
                권현빈
                <Flag name="kr" />
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
      </PC>
      <Mobile>
        {renderContactModal()}
        <mobileStyle.IntroContainer>
          <div>
            <img className="me" alt="프로필 사진" src={mobileProfile} />
          </div>
          <div>
            <div className="name">권현빈</div>
            <div className="job">Frontend Developer</div>
            <div className="intro">{renderMyInfos(myInfos)}</div>
          </div>
          <mobileStyle.IconsBox>{renderLink(linkData)}</mobileStyle.IconsBox>
        </mobileStyle.IntroContainer>
      </Mobile>
    </div>
  );
}

export default Intro;
