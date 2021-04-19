import React, { useState } from "react";
import Intro from "../../components/Intro/intro";
import SkillContainer from "../../components/Skill/SkillContainer";
import ProjectContainer from "../../components/Project/ProjectContainer";
import Experience from "../../components/Experience/Experience";
import ContactButton from "../../components/Contact/ContactButton";

function Page(props) {
  return (
    <div>
      <Intro focusTarget={props.focusTarget} targetIndex={0} />
      <SkillContainer focusTarget={props.focusTarget} targetIndex={1} />
      <ProjectContainer focusTarget={props.focusTarget} targetIndex={2} />
      <Experience focusTarget={props.focusTarget} targetIndex={3} />
      <ContactButton />
    </div>
  );
}

export default Page;
