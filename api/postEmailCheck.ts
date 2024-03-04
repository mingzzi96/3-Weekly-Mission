import { REQUEST_URLS } from "@/constants/api/api";
import axiosInstance from "./instance/axiosInstance";

export const postEmailCheck = async (email: string) => {
  try {
    const response = await axiosInstance.post(REQUEST_URLS.postEmailCheck, {
      email,
    });

    if (response.status === 409) {
      return response.status;
    }

    const responseData = response;
    return responseData;
  } catch (error) {
    if (error instanceof Error && "response" in error) {
      return (error as any).response.request.status;
    }
  }
};
