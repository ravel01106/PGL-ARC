import React from "react";
import { UserDefaultContextType } from "../types/UserDefaultContextType";

const userIsLoginContext = React.createContext({} as UserDefaultContextType);

export { userIsLoginContext, UserDefaultContextType };
