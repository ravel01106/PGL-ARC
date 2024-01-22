import UserType, { UserResponseFetchingType } from "../types/UserType";
import { postInitRequest } from "./RequestService";
import { LoginJsonResponse } from "../types/JsonResponse";
import { storeData } from "./AsyncStoreService";
import LOGIN_API_URL from "../data/LoginApiUrl";

const LOGIN_PATH = LOGIN_API_URL + "/users/login";

const loginUser = async (
  user: UserType
): Promise<UserResponseFetchingType | null> => {
  const request: RequestInfo = `${LOGIN_PATH}`;
  const response = await fetch(request, postInitRequest(user));

  if (response.status == 200) {
    const jsonResponse: LoginJsonResponse = await response.json();

    const cookie: string | null = response.headers.get("Set-Cookie");
    if (cookie) {
      await storeData(cookie);
    }

    const loggedUser: UserResponseFetchingType = {
      name: jsonResponse.name,
    };

    return loggedUser;
  }
  return null;
};

export default loginUser;
