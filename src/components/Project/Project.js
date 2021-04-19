import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../reuseable/styles";
import { rnProject } from "../../myInfo/_reactnative";
import { reactProject } from "../../myInfo/_reactjs";
import { Icon } from "semantic-ui-react";
import { Mobile, PC } from "../../hook/mediaQuery";
import { mobileStyle } from "./style/mobile";

const ProjectContainer = styled.div`
  margin-left: 100px;
  .period,
  .linkTitle {
    margin-left: 50px;
    text-align: right;
    font-weight: bold;
    font-size: 20px;
    color: #888c89;
  }
  i {
    font-size: 25px;
  }
  i:hover {
    font-size: 27px;
  }
  hr {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
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

function Project(props) {
  let project = {
    data: null,
    title: null,
    color: null,
    index: null,
  };
  if (props.tech === "ReactNative") {
    project.data = rnProject;
    project.title = "ReactNative";
    project.color = "#87BF00";
  } else if (props.tech === "React") {
    project.data = reactProject;
    project.title = "React";
    project.color = "#5CD3F3";
  }
  const renderContent = (arr) => {
    return arr.map((ele) => {
      return <div className="content">-{ele}</div>;
    });
  };

  const renderLink = (obj) => {
    const iconNameColor = {
      github: ["github", "#24292e"],
      manual: ["file pdf outline", "#bf5d7a"],
      playStore: ["google play", "#01e871"],
      youtube: ["youtube play", "#ff0000"],
      url: ["google", ""],
    };

    return ["github", "manual", "playStore", "youtube", "url"].map(
      (platform) => {
        return (
          obj[platform] && (
            <div>
              <FlexBox>
                <div className="flex-2 linkTitle">{platform}</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-7">
                  <a href={obj[platform]} target="_blank">
                    <Icon
                      style={{ color: iconNameColor[platform][1] }}
                      name={iconNameColor[platform][0]}
                    />
                  </a>
                </div>
              </FlexBox>
              <br />
            </div>
          )
        );
      }
    );
  };
  const renderProject = (arr, media) => {
    return arr.map((ele) => {
      return (
        <div>
          <FlexBox style={media === "pc" ? null : { flexDirection: "column" }}>
            <div className="flex-2 period">
              <h3 style={{ color: "#cfc9c9" }}>{ele.period}</h3>
            </div>
            <div className="flex-1">&nbsp;</div>
            <div className="flex-7">
              <h3>{ele.title}</h3>
              <ContentContainer>{renderContent(ele.content)}</ContentContainer>
            </div>
          </FlexBox>
          <br />
          {renderLink(ele)}
          <hr />
        </div>
      );
    });
  };
  return (
    <div>
      <PC>
        <ProjectContainer>
          <h2 style={{ color: project.color }}>&bull; {project.title}</h2>
          {renderProject(project.data, "pc")}
        </ProjectContainer>
      </PC>
      <Mobile>
        <mobileStyle.ProjectContainer>
          <h2 style={{ color: project.color }}>&bull; {project.title}</h2>
          {renderProject(project.data, "mobile")}
        </mobileStyle.ProjectContainer>
      </Mobile>
    </div>
  );
}

export default Project;
