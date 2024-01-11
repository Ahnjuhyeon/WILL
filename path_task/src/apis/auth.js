import { axiosInstance } from "./core";

const PATH = "/todo/user";

const AuthApi = {
  //sign-up
  async postSignUpData(signUpData) {
    const res = await axiosInstance().post(PATH, signUpData);
    return res;
  },

  //sign-in
  async postLoginInData(loginUserData) {
    const res = await axiosInstance().post(PATH, loginUserData);
    return res.data;
  },

  // logout
  async getUserLogout() {
    const res = await axiosInstance().get(`${PATH}/logout`);
    return res.data;
  },
};
export default AuthApi;
