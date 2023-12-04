import React from "react";

type UserDefaultContextType = {
  isLogin: boolean;
  toggleChangeIsLogin: Function;
};

const userIsLoginContext = React.createContext({} as UserDefaultContextType);

export { userIsLoginContext, UserDefaultContextType };
