import React from "react";

type DisplayInfoContextType = {
  displayMyInfo: boolean;
  toggleChangeDisplayMyInfo: Function;
};

const displayInfoContext = React.createContext({} as DisplayInfoContextType);

export { displayInfoContext, DisplayInfoContextType };
