import axios from "axios";

const baseDomain = "https://kabo-api.herokuapp.com";

export const mainAppInstance = axios.create({
  baseURL: baseDomain,
  timeout: 60000
});

export const doAPICall = (
  url,
  obj = {
    method: "GET",
    headers: {},
    data: {}
  }
) => {
  return new Promise((resolve, reject) => {
    mainAppInstance({
      url: url,
      method: obj.method,
      headers: {
        ...obj.headers,
        Pragma: "no-cache"
      },
      responseType: obj.responseType,
      data: obj.data,
      params: obj.params
    })
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
