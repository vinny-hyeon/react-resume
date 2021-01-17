import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../reuseable/styles";
import { rnProject } from "../../myInfo/_reactnative";
import { reactProject } from "../../myInfo/_reactjs";
import { Icon } from "semantic-ui-react";

const ProjectContainer = styled.div`
  margin-left: 100px;
  .period,
  .linkTitle {
    margin-left: 50px;
    text-align: right;
  }
  i {
    font-size: 20px;
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
    project.index = 1;
  } else if (props.tech === "React") {
    project.data = reactProject;
    project.title = "React";
    project.color = "#5CD3F3";
    project.index = 2;
  }
  const renderProject = (arr) => {
    return arr.map((ele) => {
      return (
        <div>
          <FlexBox>
            <div className="flex-2 period">
              <h3 style={{ color: "#cfc9c9" }}>{ele.period}</h3>
            </div>
            <div className="flex-1">&nbsp;</div>
            <div className="flex-7">
              <h3>{ele.title}</h3>
              <ContentContainer>
                <div>{ele.content}</div>
              </ContentContainer>
            </div>
          </FlexBox>
          {ele.github && (
            <FlexBox>
              <div className="flex-2 linkTitle">Github</div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-7">
                <a href={ele.github} target="_blank">
                  <Icon name="github" />
                </a>
              </div>
            </FlexBox>
          )}
          {ele.manual && (
            <FlexBox>
              <div className="flex-2 linkTitle">Manual</div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-7">
                <a href={ele.manual} target="_blank">
                  <Icon name="file pdf outline" />
                </a>
              </div>
            </FlexBox>
          )}

          <hr />
        </div>
      );
    });
  };
  return (
    <div ref={(el) => (props.focusTarget.current[project.index] = el)}>
      <ProjectContainer>
        <h2 style={{ color: project.color }}>&bull; {project.title}</h2>
        {renderProject(project.data)}
      </ProjectContainer>
    </div>
  );
}

export default Project;
