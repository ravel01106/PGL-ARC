import UserType, { LoggedUser } from "../types/UserType";
import { postInitRequest } from "./requestService";
import {
  LoginJsonResponse,
  RegisterJsonResponse,
  LogoutJsonResponse,
} from "../types/JsonResponse";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGIN_API_URL = "http://192.168.0.23:8888/users/";
const LOGIN_PATH = "login";
const REGISTER_PATH = "register";
const LOGOUT_PATH = "logout";

const storeData = async (cookie: string) => {
  try {
    await AsyncStorage.setItem("my-cookie", cookie);
    console.log("Se ha añadido la cookie al dispositivo correctamente");
  } catch (error) {
    console.log("Error");
  }
};
const removeData = async () => {
  try {
    await AsyncStorage.removeItem("my-cookie");
    console.log("Se ha eliminado la cookie correctamente");
  } catch (error) {
    console.log("Error");
  }
};

export const loginUser = async (user: UserType): Promise<LoggedUser | null> => {
  const request: RequestInfo = `${LOGIN_API_URL}${LOGIN_PATH}`;
  const response = await fetch(request, postInitRequest(user));

  if (response.status == 200) {
    const jsonResponse: LoginJsonResponse = await response.json();

    const cookie: string | null = response.headers.get("Set-Cookie");
    if (cookie) {
      await storeData(cookie);
    }

    const loggedUser: LoggedUser = {
      name: jsonResponse.name,
    };

    return loggedUser;
  }
  return null;
};

export const resgisterUser = async (
  user: object
): Promise<LoggedUser | null> => {
  const request: RequestInfo = `${LOGIN_API_URL}${REGISTER_PATH}`;
  const response = await fetch(request, postInitRequest(user));
  if (response.status == 201) {
    const jsonResponse: RegisterJsonResponse = await response.json();

    const cookie: string | null = response.headers.get("Set-Cookie");

    if (cookie) {
      await storeData(cookie);
    }

    const loggedUser: LoggedUser = {
      name: jsonResponse.name,
    };

    return loggedUser;
  }
  return null;
};

export const logoutUser = async (): Promise<LogoutJsonResponse | null> => {
  const request: RequestInfo = `${LOGIN_API_URL}${LOGOUT_PATH}`;
  const response = await fetch(request, postInitRequest());
  if (response.status == 200) {
    const jsonResponse: LogoutJsonResponse = await response.json();
    await removeData();
    return jsonResponse;
  }
  return null;
};
