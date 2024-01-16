import { LogoutJsonResponse } from "../types/JsonResponse";
import { removeData } from "./AsyncStoreService";
import { postInitRequest } from "./RequestService";

const LOGOUT_PATH = "http://172.16.101.14:8888/users/logout";

const logoutUser = async (): Promise<LogoutJsonResponse | null> => {
  const request: RequestInfo = `${LOGOUT_PATH}`;
  const response = await fetch(request, postInitRequest());
  if (response.status == 200) {
    const jsonResponse: LogoutJsonResponse = await response.json();
    await removeData();
    return jsonResponse;
  }
  return null;
};

export default logoutUser;
