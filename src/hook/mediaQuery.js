import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return <>{isMobile && children}</>;
};

const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px) ",
  });
  return <>{isPc && children}</>;
};

const PCwithMenubar = ({ children }) => {
  const isPCwithMenubar = useMediaQuery({
    query: "(min-width:1300px) ",
  });
  return <>{isPCwithMenubar && children}</>;
};

export { Mobile, PC, PCwithMenubar };
