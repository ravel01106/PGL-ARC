import React from "react";

import {
  UserDefaultContextType,
  userDefaultContext,
  userIsLoginContext,
  UserIsLoginContextType,
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
  };

  const isLoginDefault: UserIsLoginContextType = {
    isLogin,
    toggleChangeIsLogin,
  };
  return (
    <userDefaultContext.Provider value={userDefault}>
      <userIsLoginContext.Provider value={isLoginDefault}>
        {children}
      </userIsLoginContext.Provider>
    </userDefaultContext.Provider>
  );
};

export default UserDefaultProvider;
