export const encodeQueryData = (data) => {
  let ret = [];

  for (let d in data) {
    const value = data[d];

    if (value) {
      if (typeof value == "object") {
        value = value.join(",");
      }

      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(value));
    }
  }

  return ret.join("&");
};
