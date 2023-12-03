import React from "react";

type UserDefaultContextType = {
  username: string;
  password: string;
  isLogin: boolean;
  toggleChangeIsLogin: Function;
};

const userDefaultContext = React.createContext({} as UserDefaultContextType);

export { userDefaultContext, UserDefaultContextType };
