export const stringIsNullOrEmpty = (value: string) => {
  if (typeof value === "string" && value.trim().length === 0) {
    return true;
  } else {
    return false;
  }
};
