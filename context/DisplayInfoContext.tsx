import React from "react";
import { DisplayInfoContextType } from "../types/DisplayInfoContextType";

const displayInfoContext = React.createContext({} as DisplayInfoContextType);

export { displayInfoContext, DisplayInfoContextType };
