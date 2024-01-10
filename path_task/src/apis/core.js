import axios from "axios";
import { useEffect } from "react";
export const axiosInstance = axios.create({
  baseURL: "https://topdragon.co.kr",
});
const getdata = async () => {
  const res = await axiosInstance.get(`/todo`);
  console.log(res.data);
  return res.data;
};
