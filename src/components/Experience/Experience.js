import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexBox } from "../reuseable/styles";
import { Icon, Button } from "semantic-ui-react";
import { mainExperience } from "../../myInfo/_experience";
const ExperienceContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px;
  width: 1000px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
  .leftContainer {
    margin-top: 100px;
    margin-left: 50px;
  }
  .rightContainer {
    margin-top: 100px;
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

  const renderMainExperience = () => {
    return mainExperience.map((ele, idx) => {
      return (
        <div className={idx % 2 === 0 ? "leftContainer" : "rightContainer"}>
          <div className="title">
            {ele.name} ({ele.duration})
          </div>
          <FlexBox
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
              {ele.content[0]}
            </div>
          </FlexBox>
        </div>
      );
    });
  };
  return (
    <div ref={(el) => (props.focusTarget.current[3] = el)}>
      <ExperienceContainer>
        <h1>Experience</h1>
        {renderMainExperience()}
      </ExperienceContainer>
    </div>
  );
}

export default Experience;
