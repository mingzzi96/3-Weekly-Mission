export const formatDate = (value?: string) => {
  if (value === undefined) {
    return undefined;
  }
  const splitValue = value?.split("T");
  const dateValue = splitValue[0];
  return dateValue.split("-").join(".");
};
