const parseJson = (string = "") => {
  let result;
  try {
    result = JSON.parse(string);
  } catch {
    result = "";
  }
  return result;
};

export { parseJson };
