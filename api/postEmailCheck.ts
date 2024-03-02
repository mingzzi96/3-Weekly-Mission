import { API_BASE_URL } from "@/constants/api/api";

export const postEmailCheck = async (email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 409) {
      return response.status;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return error;
  }
};
