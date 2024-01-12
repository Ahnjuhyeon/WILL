import axios from "axios";
// import TokenRepository from "../repository/token-repository";
export const axiosInstance = () => {
  return axios.create({
    baseURL: "https://topdragon.co.kr",
    //   headers: {
    //     Authorization: `Bearer ${TokenRepository.getToken()}`,
    //   },
    //   withCredentials: true,
  });
};
// axiosInstance.interceptors.request.use((config) => {
//   const access_token = TokenRepository.getToken();
//   if (access_token) {
//     config.headers.Authorization = `Bearer ${access_token}`;
//     //왜 accessToken이 안되지?
//   }
//   return config;
// });
