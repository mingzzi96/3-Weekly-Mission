export const formatDate = (value: string) => {
  const splitValue = value.split("T");
  const dateValue = splitValue[0];
  return dateValue.split("-").join(".");
};
