import { config } from "../../../config";
import { post } from "../../../utils/axiosInstance";

export const register = async ({ email, password, type }) => {
  const res = await post(config.authApi.register, {
    email,
    password,
    type,
  });
  return res;
};

export const login = async ({ email, password }) => {
  const res = await post(config.authApi.login, {
    email,
    password,
  });
  return res;
};

export const logout = async () => {
  await post(config.authApi.logout);
};
