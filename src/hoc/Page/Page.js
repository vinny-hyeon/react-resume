import React, { useState } from "react";
import Intro from "../../components/Intro/intro";
import Reactjs from "../../components/Reactjs/Reactjs";

function Page(props) {
  const displayPage = (num) => {
    switch (num) {
      case 0:
        return <Intro />;
      case 1:
        return <Reactjs />;
      default:
        return <Intro />;
    }
  };
  return <div>{displayPage(props.page)}</div>;
}

export default Page;
