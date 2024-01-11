import { axiosInstance } from "./core";

const PATH = "/todo/user";

const AuthApi = {
  //sign-in
  async signIn(email, password) {
    const res = await axiosInstance().post(PATH + "/sign-in", {
      email,
      password,
    });
    return res.data;
  },

  //sign-up
  async signUp(email, password) {
    const res = await axiosInstance().post(PATH + "/sign-up", {
      email,
      password,
    });
    return res.data;
  },

  // logout
  async logOut() {
    const res = await axiosInstance().post(PATH + "/sign-out");
    return res.data;
  },
};
export default AuthApi;
