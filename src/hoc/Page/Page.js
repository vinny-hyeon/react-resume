import React, { useState } from "react";
import Intro from "../../components/Intro/intro";
import Reactjs from "../../components/Reactjs/Reactjs";

function Page(props) {
  return (
    <div>
      <Intro focusTarget={props.focusTarget} />
      <Reactjs focusTarget={props.focusTarget} />
    </div>
  );
}

export default Page;
