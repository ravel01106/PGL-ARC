import React from "react";

import {
  UserDefaultContextType,
  userDefaultContext,
} from "../context/LoginContext";

type UserDefaultProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const UserDefaultProvider = ({ children }: UserDefaultProviderProps) => {
  const [isLogin, setIsLogin] = React.useState(false);

  const toggleChangeIsLogin = () => setIsLogin(!isLogin);

  const userDefault: UserDefaultContextType = {
    username: "admin",
    password: "admin",
    isLogin,
    toggleChangeIsLogin,
  };

  return (
    <userDefaultContext.Provider value={userDefault}>
      {children}
    </userDefaultContext.Provider>
  );
};

export default UserDefaultProvider;
