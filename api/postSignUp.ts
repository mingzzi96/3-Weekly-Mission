import { API_BASE_URL } from "@/constants/api/api";

export const postSignUp = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
