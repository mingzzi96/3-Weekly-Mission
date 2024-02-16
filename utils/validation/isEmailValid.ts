export const isEmailExist = (email: string): boolean => {
  return email !== "" && email !== undefined && email !== null;
};
