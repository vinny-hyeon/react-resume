import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexBox } from "../reuseable/styles";
import { Icon, Button } from "semantic-ui-react";
import { mainExperience } from "../../myInfo/_experience";
import { Mobile, PC } from "../../hook/mediaQuery";
import { mobileStyle } from "./style/mobile";
import { domains, domainIcons } from "components/reuseable/domains";

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
  .domainLink {
    display: flex;
    flex-direction: row;
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
    return domains.map((domain) => {
      if (~Object.keys(obj).indexOf(domain)) {
        return (
          obj[domain] && (
            <div>
              <br />
              <a href={obj[domain]} target="_blank">
                <Icon
                  style={{ color: domainIcons[domain][1] }}
                  name={domainIcons[domain][0]}
                />
              </a>
            </div>
          )
        );
      }
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
                disabled={ele.imgURL.length < 2}
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
                disabled={ele.imgURL.length < 2}
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
              <PC>
                <ContentContainer>
                  {renderContent(ele.content)}
                </ContentContainer>
              </PC>
              <Mobile>
                <mobileStyle.ContentContainer>
                  {renderContent(ele.content)}
                </mobileStyle.ContentContainer>
              </Mobile>
              <br />
              <div className="result">{ele.result}</div>
              <div className="domainLink">{renderLink(ele.references)}</div>
            </div>
          </FlexBox>
        </div>
      );
    });
  };
  return (
    <div ref={(el) => (props.focusTarget.current[props.targetIndex] = el)}>
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
