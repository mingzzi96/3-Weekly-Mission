export const getUserData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/1`
  );

  if (!response.ok) {
    throw new Error("User 정보 받아오기 실패");
  }

  const result = await response.json();
  return result.data[0];
};
