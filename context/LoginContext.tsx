import React from "react";

type UserDefaultContextType = {
  username: string;
  password: string;
};

type UserIsLoginContextType = {
  isLogin: boolean;
  toggleChangeIsLogin: Function;
};

const userDefaultContext = React.createContext({} as UserDefaultContextType);
const userIsLoginContext = React.createContext({} as UserIsLoginContextType);

export {
  userDefaultContext,
  UserDefaultContextType,
  userIsLoginContext,
  UserIsLoginContextType,
};
