import React, { useState } from "react";
import Contact from "./Contact";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const ContactButtonStyle = styled.div`
  text-align: center;
  margin: 20px;
`;

function ContactButton(props) {
  const [openContactModal, setOpenContactModal] = useState(false);
  const renderContactModal = () => {
    return (
      <Contact open={openContactModal} handleChange={setOpenContactModal} />
    );
  };
  return (
    <div>
      <br />
      <br />
      {renderContactModal()}
      <ContactButtonStyle>
        <Button
          content="채용하기"
          onClick={() => {
            setOpenContactModal(true);
          }}
          color="twitter"
        />
      </ContactButtonStyle>
      <br />
      <br />
    </div>
  );
}

export default ContactButton;
