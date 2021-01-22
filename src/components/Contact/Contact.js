import React from "react";
import emailjs from "emailjs-com";
import { emailJsKey } from "../../myInfo/_contact";
import { FlexBox } from "../reuseable/styles";

import {
  Button,
  Modal,
  Form,
  Input,
  TextArea,
  Label,
  Confirm,
} from "semantic-ui-react";

function ContactUs(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        emailJsKey.serviceKey,
        emailJsKey.templeteKey,
        e.target,
        emailJsKey.userKey
      )
      .then(
        (result) => {
          alert("메일 전송에 성공하였습니다.");
          props.handleChange(false);
        },
        (error) => {
          alert("메일 전송에 실패하였습니다.");
        }
      );
  }
  return (
    <Modal open={props.open}>
      <Modal.Header>Contact</Modal.Header>
      <Form onSubmit={sendEmail}>
        <Modal.Content>
          <FlexBox>
            <Form.Field className="flex-1">
              <Label>From</Label>
              <Input name="from_name" placeholder="Email/Phone" />
            </Form.Field>
            <Form.Field className="flex-1">
              <Label>To</Label>
              <Input value={emailJsKey.myEmail} name="user_email" readOnly />
            </Form.Field>
          </FlexBox>
          <Form.Field>
            <Label>Message</Label>
            <TextArea name="message" placeholder="Message" rows={10} />
          </Form.Field>
        </Modal.Content>
        <Modal.Actions style={{ float: "right", margin: "10px" }}>
          <Button color="red" onClick={() => props.handleChange(false)}>
            취소
          </Button>
          <Button
            type="submit"
            value="Send"
            content="제출"
            labelPosition="right"
            icon="checkmark"
            positive
          />
        </Modal.Actions>
      </Form>
    </Modal>
  );
}

export default ContactUs;
