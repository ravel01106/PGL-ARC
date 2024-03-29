import { ErrorJsonResponse, RegisterJsonResponse } from "../types/JsonResponse";
import { UserRegisterType, UserResponseFetchingType } from "../types/UserType";
import { storeData } from "./AsyncStoreService";
import { postInitRequest } from "./RequestService";
import LOGIN_API_URL from "../data/LoginApiUrl";

const REGISTER_PATH = LOGIN_API_URL + "/users/register";

const resgisterUser = async (
  user: UserRegisterType
): Promise<UserResponseFetchingType | null> => {
  const request: RequestInfo = `${REGISTER_PATH}`;
  const response = await fetch(request, postInitRequest(user));
  if (response.status == 201) {
    const jsonResponse: RegisterJsonResponse = await response.json();

    const cookie: string | null = response.headers.get("Set-Cookie");

    if (cookie) {
      await storeData(cookie);
    }

    const loggedUser: UserResponseFetchingType = {
      name: jsonResponse.name,
    };

    return loggedUser;
  } else if (response.status == 400) {
    const jsonError: ErrorJsonResponse = await response.json();

    const userError: UserResponseFetchingType = {
      name: user.name,
      message: jsonError.message,
    };
    return userError;
  }
  return null;
};

export default resgisterUser;
