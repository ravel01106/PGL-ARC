import React from "react";

import {
  UserDefaultContextType,
  userIsLoginContext,
} from "../context/LoginContext";

import {
  displayInfoContext,
  DisplayInfoContextType,
} from "../context/DisplayInfoContext";

type CustomProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const CustomProvider = ({ children }: CustomProviderProps) => {
  const [displayMyInfo, setDisplayMyInfo] = React.useState(true);
  const [isLogin, setIsLogin] = React.useState(false);
  const [name, setName] = React.useState("");

  const userDefault: UserDefaultContextType = {
    isLogin,
    toggleChangeIsLogin: () => setIsLogin(!isLogin),
    name,
    changeName: (newName: string) => setName(newName),
  };

  const displayInfoUser: DisplayInfoContextType = {
    displayMyInfo,
    toggleChangeDisplayMyInfo: () => setDisplayMyInfo(!displayMyInfo),
  };

  return (
    <userIsLoginContext.Provider value={userDefault}>
      <displayInfoContext.Provider value={displayInfoUser}>
        {children}
      </displayInfoContext.Provider>
    </userIsLoginContext.Provider>
  );
};

export default CustomProvider;
