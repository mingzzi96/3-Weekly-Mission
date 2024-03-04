import { REQUEST_URLS } from "@/constants/api/api";
import { FAIL_TO_LOAD_LIST } from "@/constants/messages/error";
import axiosInstance from "./instance/axiosInstance";

export const getFolderNameData = async () => {
  try {
    const response = await axiosInstance.get(REQUEST_URLS.getFolderNameData);
    return response.data.data;
  } catch (error) {
    if (error) {
      throw new Error(`${error} : ${FAIL_TO_LOAD_LIST}`);
    }
  }
};
