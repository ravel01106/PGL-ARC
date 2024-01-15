type UserType = {
  name: string;
  password: string;
};

export type UserResponseFetchingType = {
  name: string;
  message?: string;
};

export type UserRegisterType = {
  name: string;
  email: string;
  password: string;
};

export default UserType;
