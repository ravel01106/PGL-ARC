import UserType from "../types/UserType";
import { postInitRequest } from "./requestService";

const LOGIN_API_URL = "http://192.168.0.23:8888/users/";
const LOGIN_PATH = "login";
const REGISTER_PATH = "register";
const LOGOUT_PATH = "logout";

type LoginJsonResponse = {
  id: string;
  name: string;
  email: string;
};

type RegisterJsonResponse = {
  id: string;
  name: string;
  email: string;
};

type LogoutJsonResponse = {
  message: string;
};

type LoggedUser = {
  name: string;
};

export const loginUser = async (user: UserType): Promise<LoggedUser | null> => {
  const request: RequestInfo = `${LOGIN_API_URL}${LOGIN_PATH}`;
  const response = await fetch(request, postInitRequest(user));

  if (response.status == 200) {
    //const cookie = response.headers.getSetCookie();

    const jsonResponse: LoginJsonResponse = await response.json();
    const loggedUser: LoggedUser = {
      name: jsonResponse.name,
    };
    return loggedUser;
  }
  return null;
};

export const resgisterUser = async (user: object) => {
  const request: RequestInfo = `${LOGIN_API_URL}${REGISTER_PATH}`;
  const response = await fetch(request, postInitRequest(user));
  const cookie = response.headers.getSetCookie();
  const jsonResponse: RegisterJsonResponse = await response.json();
};

export const logoutUser = async (user: object) => {
  const request: RequestInfo = `${LOGIN_API_URL}${LOGOUT_PATH}`;
  const response = await fetch(request, postInitRequest(user));
  const cookie = response.headers.getSetCookie();
  const jsonResponse: LogoutJsonResponse = await response.json();
};
