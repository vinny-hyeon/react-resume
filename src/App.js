import React, { useState } from "react";
import styled from "styled-components";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";

function App() {
  const [page, setPage] = useState(0);
  const showPage = (num) => {
    setPage(num);
  };
  return (
    <div>
      <Menubar showPage={showPage} />
      <Page page={page} />
    </div>
  );
}

export default App;
