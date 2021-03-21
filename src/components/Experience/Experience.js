import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexBox } from "../reuseable/styles";
import { Icon, Button } from "semantic-ui-react";
import { mainExperience } from "../../myInfo/_experience";
import { Mobile, PC } from "../../hook/mediaQuery";
import { mobileStyle } from "./style/mobile";

const ExperienceContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px;
  width: 1000px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
  .leftContainer {
    margin-top: 50px;
    margin-left: 50px;
  }
  .rightContainer {
    margin-top: 50px;
    margin-right: 50px;
    text-align: right;
  }
  .title {
    font-weight: bold;
    font-size: 20px;
  }
  .pictureContainer {
    padding: 25px;
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

function Experience(props) {
  const [imgNum, setImgNum] = useState([]);
  let imgNumTemp = [];

  useEffect(() => {
    for (let i = 0; i < mainExperience.length; i++) {
      imgNumTemp.push(0);
    }
    setImgNum(imgNumTemp);
  }, []);

  const renderLink = (obj) => {
    const iconNameColor = {
      pdf: ["file pdf outline", "#bf5d7a"],
      youtube: ["youtube play", "#ff0000"],
    };
    return ["pdf", "youtube"].map((platform) => {
      return (
        obj[platform] && (
          <div>
            <br />
            <a href={obj[platform]} target="_blank">
              <Icon
                style={{ color: iconNameColor[platform][1] }}
                name={iconNameColor[platform][0]}
              />
            </a>
          </div>
        )
      );
    });
  };

  const renderContent = (arr) => {
    return arr.map((ele) => {
      return <div className="content">-{ele}</div>;
    });
  };

  const renderMainExperience = () => {
    return mainExperience.map((ele, idx) => {
      return (
        <div className={idx % 2 === 0 ? "leftContainer" : "rightContainer"}>
          <div className="title">
            {ele.name} ({ele.duration})
          </div>
          <FlexBox
            className="device"
            style={idx % 2 === 0 ? null : { flexDirection: "row-reverse" }}
          >
            <div className="flex-4 pictureContainer">
              <img
                className="picture"
                alt={ele.imgAlt}
                src={ele.imgURL[imgNum[idx]]}
              />
              <br />
              <Button
                className="Arrow"
                icon="caret square left outline"
                onClick={() => {
                  let temp = imgNum.slice();
                  temp[idx]--;
                  if (temp[idx] < 0) {
                    temp[idx] += ele.imgURL.length;
                  }
                  setImgNum(temp);
                }}
              ></Button>
              <Button
                className="Arrow"
                icon="caret square right outline"
                onClick={() => {
                  let temp = imgNum.slice();
                  temp[idx]++;
                  if (temp[idx] >= ele.imgURL.length) {
                    temp[idx] -= ele.imgURL.length;
                  }
                  setImgNum(temp);
                }}
              ></Button>
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <ContentContainer>{renderContent(ele.content)}</ContentContainer>
              <br />
              <div className="result">{ele.result}</div>
              {renderLink(ele.references)}
            </div>
          </FlexBox>
        </div>
      );
    });
  };
  return (
    <div ref={(el) => (props.focusTarget.current[3] = el)}>
      <PC>
        <ExperienceContainer>
          <h1>Experience</h1>
          {renderMainExperience()}
        </ExperienceContainer>
      </PC>
      <Mobile>
        <mobileStyle.ExperienceContainer>
          <h1>Experience</h1>
          {renderMainExperience()}
        </mobileStyle.ExperienceContainer>
      </Mobile>
    </div>
  );
}

export default Experience;
