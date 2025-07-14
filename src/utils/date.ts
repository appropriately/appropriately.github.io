export const dateAsMonthYear = (date: Date) => {
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${month}/${year}`;
};
