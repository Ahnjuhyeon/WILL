import { createContext, useContext, useEffect, useState } from "react";
import AuthApi from "../apis/auth";
import TokenRepository from "../repository/token-repository";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(TokenRepository.getToken());
  useEffect(() => {
    const token = TokenRepository.getToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  const [accessToken, setAccessToken] = useContext(AuthContext);

  const SignIn = async ({ email, password }) => {
    const res = await AuthApi.signIn(email, password);
    setAccessToken(res.data.token);
    TokenRepository.setToken(res.data.token);
    return res;
  };

  const SignUp = async (inform) => {
    const res = await AuthApi.signUp(inform);
    return res;
  };

  const SignOut = async () => {
    await AuthApi.logOut();
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
