import React from "react";

import {
  UserDefaultContextType,
  userDefaultContext,
} from "../context/LoginContext";
import { CardInfoContextType, cardInfoContext } from "../context/CardContext";

type CustomProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const CustomProvider = ({ children }: CustomProviderProps) => {
  const [isLogin, setIsLogin] = React.useState(false);

  const toggleChangeIsLogin = () => setIsLogin(!isLogin);

  const userDefault: UserDefaultContextType = {
    username: "admin",
    password: "admin",
    isLogin,
    toggleChangeIsLogin,
  };
  const dataUser: CardInfoContextType = {
    title: "Amanda Ravelo Cabrera",
    description:
      "I am a full stack programmer who is very curious about new technologies.",
    background: require("../assets/images/fondo-amanda.jpg"),
    avatar: require("../assets/images/avatar.png"),
    skillList: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "MySQL",
      "PHP",
      "MongoDB",
      "CSS",
      "HTML",
    ],
    qr: "github.com/ravel01106",
  };

  return (
    <userDefaultContext.Provider value={userDefault}>
      <cardInfoContext.Provider value={dataUser}>
        {children}
      </cardInfoContext.Provider>
    </userDefaultContext.Provider>
  );
};

export default CustomProvider;
