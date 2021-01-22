import React from "react";
import emailjs from "emailjs-com";
import { emailJsKey } from "../../myInfo/_contact";
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Modal open={props.open}>
      <Modal.Header>Contact</Modal.Header>
      <Form onSubmit={sendEmail}>
        <Modal.Content>
          <Form.Field>
            <Label>To</Label>
            <Input value={emailJsKey.myEmail} name="user_email" readOnly />
          </Form.Field>
          <Form.Field>
            <Label>From</Label>
            <Input name="from_name" placeholder="이름/기업" />
          </Form.Field>
          <Form.Field>
            <Label>Message</Label>
            <TextArea name="message" placeholder="Message" rows={10} />
          </Form.Field>
        </Modal.Content>
        <Modal.Actions style={{ float: "right" }}>
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
