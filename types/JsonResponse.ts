export type LoginJsonResponse = {
  id: string;
  name: string;
  email: string;
};

export type RegisterJsonResponse = {
  id: string;
  name: string;
  email: string;
};

export type LogoutJsonResponse = {
  message: string;
};

export type ErrorJsonResponse = {
  message: string;
};
