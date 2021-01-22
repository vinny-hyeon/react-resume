import React from "react";
import emailjs from "emailjs-com";
import { emailJsKey } from "../../myInfo/_contact";
import { Button, Modal } from "semantic-ui-react";

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
    <Modal
      //   onClose={() => props.handleChange(false)}
      //   onOpen={() => props.handleChange(true)}
      open={props.open}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <form className="contact-form" onSubmit={sendEmail}>
          {" "}
          <input type="hidden" name="contact_number" /> <label>Name</label>{" "}
          <input type="text" name="user_name" /> <label>Email</label>{" "}
          <input type="email" name="user_email" /> <label>Message</label>{" "}
          <textarea name="message" /> <input type="submit" value="Send" />{" "}
        </form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => props.handleChange(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => props.handleChange(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ContactUs;
