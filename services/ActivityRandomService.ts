import { getInitRequest } from "./RequestService";

const ACTIVITY_API_URL = "https://www.boredapi.com";
const ACTIVITY_PATH = "/api/activity";

type ActivityJsonResponse = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
};

export const getActivityRandom = async (): Promise<ActivityJsonResponse> => {
  const request: RequestInfo = `${ACTIVITY_API_URL}${ACTIVITY_PATH}`;
  const response = await fetch(request, getInitRequest());
  const jsonResponse: ActivityJsonResponse = await response.json();
  return jsonResponse;
};
