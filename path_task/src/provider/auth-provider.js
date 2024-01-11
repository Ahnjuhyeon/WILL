import { createContext, useContext, useEffect, useState } from "react";
import AuthApi from "../apis/auth";
import TokenRepository from "../repository/token-repository";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setAccessToken(token);
  });

  return (
    <AuthContext.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  const [accessToken, setAccessToken] = useContext(AuthContext);

  const SignUp = async (signUpData) => {
    const res = await AuthApi.postSignUpData(signUpData);
    // return res;
  };

  const SignIn = async (loginUserData) => {
    const res = await AuthApi.postLoginInData(loginUserData);
    setAccessToken(res.tokenForHeader);
    TokenRepository.setToken(res.tokenForHeader);
    return res;
  };

  const SignOut = async () => {
    await AuthApi.getUserLogout();
    setAccessToken(null);
    TokenRepository.deleteToken();
  };
  return {
    accessToken,
    SignUp,
    SignIn,
    SignOut,
  };
};
