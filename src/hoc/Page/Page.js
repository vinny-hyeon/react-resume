import React, { useState } from "react";
import Intro from "../../components/Intro/intro";
import ProjectContainer from "../../components/Project/ProjectContainer";
import Experience from "../../components/Experience/Experience";

function Page(props) {
  return (
    <div>
      <Intro focusTarget={props.focusTarget} />
      <ProjectContainer focusTarget={props.focusTarget} />
      <Experience focusTarget={props.focusTarget} />
    </div>
  );
}

export default Page;
