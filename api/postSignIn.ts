import { AxiosError } from "axios";
import { REQUEST_URLS } from "@/constants/api/api";
import axiosInstance from "./instance/axiosInstance";

export const postSignIn = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(REQUEST_URLS.postSignIn, {
      email,
      password,
    });

    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status) {
      return error.response?.status;
    }
  }
};
