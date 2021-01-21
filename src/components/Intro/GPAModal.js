import React, { useState } from "react";
import { FlexBox } from "../reuseable/styles";
import { Button, Modal, Checkbox } from "semantic-ui-react";
import { Icon, Tab, Divider } from "semantic-ui-react";
import { gpa, scoreTable } from "../../myInfo/_GPA";
import styled from "styled-components";
const ContentContainer = styled.div`
  text-align: right;
  margin-right: 50px;
  .label {
    font-weight: bold;
    font-size: 23px;
  }
  .data {
    font-size: 15px;
  }
`;
function GPAModal() {
  const [open, setOpen] = useState(false);
  const panes = [];

  gpa.forEach((ele) => {
    panes.push({
      menuItem: ele.semester,
      render: () => {
        if (ele.isRegister) {
          return (
            <ContentContainer>
              <FlexBox>
                <div className="flex-3 label">과목명</div>
                <div className="flex-2 label">학점</div>
                <div className="flex-2 label">성적</div>
                <Divider section />
              </FlexBox>
              {renderMajorGPASemester(ele)}
              <Divider section />
              <FlexBox>
                <div className="flex-3"></div>
                <div className="flex-2 label">합계</div>
                <div className="flex-2 label">평균</div>
                <Divider section />
              </FlexBox>
              {calculateAverage(ele)}
            </ContentContainer>
          );
        } else {
          return (
            <FlexBox>
              <Icon className="flex-3" style={{ fontSize: 200 }} name="lock" />
              <div
                className="flex-3"
                style={{
                  fontSize: 50,
                  alignSelf: "center",
                  textAlign: "center",
                }}
              >
                Comming Soon!
              </div>
            </FlexBox>
          );
        }
      },
    });
  });
  const calculateAverage = (arr) => {
    const sum = arr.subject.reduce((acc, cur) => acc + parseInt(cur.weight), 0);
    const average =
      arr.subject.reduce(
        (acc, cur) => acc + scoreTable[cur.score] * parseInt(cur.weight),
        0
      ) / sum;
    return (
      <FlexBox>
        <div className="flex-3 data"></div>
        <div className="flex-2 data">{sum}</div>
        <div className="flex-2 data">{average.toFixed(2)}</div>
      </FlexBox>
    );
  };
  const renderMajorGPASemester = (arr) => {
    return arr.subject.map((ele) => {
      return (
        <FlexBox>
          <div className="flex-3 data">{ele.name}</div>
          <div className="flex-2 data">{ele.weight}</div>
          <div className="flex-2 data">{ele.score}</div>
        </FlexBox>
      );
    });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon style={{ cursor: "pointer" }} name="question circle" />}
    >
      <Modal.Header>전공 학점</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Tab
            menu={{
              color: "red",
              fluid: true,
              vertical: true,
            }}
            menuPosition="right"
            panes={panes}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="닫기"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default GPAModal;
