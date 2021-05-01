import React, { useState, useCallback, useMemo } from "react";
import { skillTable, skillDescription } from "../../myInfo/_skill";
import { Icon } from "semantic-ui-react";
import { Progress } from "semantic-ui-react";
import styled from "styled-components";
import { Mobile, PC } from "../../hook/mediaQuery";
import { mobileStyle } from "./style/mobile";

const SkillContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  .skill {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .description {
    flex: 1;
    flex-direction: column;
    text-align: center;
  }
  .content {
    text-align: left;
    line-height: 50px;
  }
`;

const SkillElementContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const IndexContainer = styled.div`
  .icon {
    color: gray;
  }
  .selectedIcon {
    color: red;
  }
`;

const ProgressContainer = styled.div`
  flex: 1;
  flex-direction: column;
  .skillName {
    font-weight: bold;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  margin: 0 30px;
`;

const indexIcon = <Icon className="icon" name="arrow right" />;
const selectedIcon = (
  <Icon className="selectedIcon" name="arrow right" size="large" />
);

function Skill(props) {
  const [index, setIndex] = useState(0);
  const [preIndex, setPreIndex] = useState(0);

  const renderSkill = () => {
    return skillTable.map((ele, idx) => {
      const clickedIndex = index;
      const hoveredIndex = preIndex;
      const isFocus = clickedIndex === idx || hoveredIndex === idx;

      return (
        <SkillElementContainer
          onClick={() => setIndex(idx)}
          onMouseOver={() => setPreIndex(idx)}
          onMouseOut={() => setPreIndex(index)}
        >
          <IndexContainer>
            {clickedIndex === idx ? selectedIcon : indexIcon}
          </IndexContainer>
          <ProgressContainer>
            <div
              className="skillName"
              style={clickedIndex === idx ? {} : { color: "gray" }}
            >
              {ele.skill}
            </div>
            <Progress
              value={ele.level}
              total="5"
              progress="ratio"
              disabled={!isFocus}
              size={isFocus ? "medium" : "small"}
              color={ele.color}
            />
          </ProgressContainer>
        </SkillElementContainer>
      );
    });
  };

  const renderContent = (contents) => {
    return contents.map((ele) => <li className="content">{ele}</li>);
  };

  const renderDescription = () => {
    const skill = skillDescription[index];
    return (
      <ContentContainer>
        <h1>{skill.title}</h1>
        <ul>{renderContent(skill.content)}</ul>
      </ContentContainer>
    );
  };

  return (
    <div>
      <PC>
        <SkillContainer>
          <div className="skill">{renderSkill()}</div>
          <div className="description">{renderDescription()}</div>
        </SkillContainer>
      </PC>
      <Mobile>
        <mobileStyle.SkillContainer>
          <div className="skill">{renderSkill()}</div>
          <div className="description">{renderDescription()}</div>
        </mobileStyle.SkillContainer>
      </Mobile>
    </div>
  );
}

export default Skill;
