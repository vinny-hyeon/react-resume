import React, { useState } from "react";
import Intro from "../../components/Intro/intro";
import Container from "../../components/Project/Container";

function Page(props) {
  return (
    <div>
      <Intro focusTarget={props.focusTarget} />
      <Container focusTarget={props.focusTarget} />
    </div>
  );
}

export default Page;
