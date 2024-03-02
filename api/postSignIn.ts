import { API_BASE_URL } from "@/constants/api/api";

export const postSignIn = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return response.status;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return null;
  }
};
