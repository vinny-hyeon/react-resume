import React, { useState, useCallback, useMemo } from "react";
import { Mobile, PC } from "../../hook/mediaQuery";
import { skillTable, skillDescription } from "../../myInfo/_skill";
import { Flag, Icon } from "semantic-ui-react";
import { Progress } from "semantic-ui-react";
import styled from "styled-components";

const SkillContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  .skill {
    flex: 1;
    flex-direction: column;
  }
  .description {
    flex: 1;
    flex-direction: column;
    text-align: center;
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

  const renderDescription = () => {
    const skill = skillDescription[index];
    return (
      <ContentContainer>
        <h1>{skill.title}</h1>
        <p>{skill.content}</p>
      </ContentContainer>
    );
  };

  return (
    <div>
      <SkillContainer>
        <div className="skill">{renderSkill()}</div>
        <div className="description">{renderDescription()}</div>
      </SkillContainer>
    </div>
  );
}

export default Skill;
