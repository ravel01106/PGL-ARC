import React from "react";

type UserDefaultContextType = {
  isLogin: boolean;
  toggleChangeIsLogin: Function;
  name: string;
  changeName: Function;
};

const userIsLoginContext = React.createContext({} as UserDefaultContextType);

export { userIsLoginContext, UserDefaultContextType };
