const ACCESS_TOKEN = "access_token";

const TokenRepository = {
  setToken(token) {
    localStorage.setItem(ACCESS_TOKEN, token);
  },
  getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  deleteToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  },
};
export default TokenRepository;
