import { doAPICall } from "../axios-instance";
export const callLoginApi = async () => {
  const data = {
    email: "test727@gmail.com",
    password: "password"
  };

  const result = await doAPICall("/login", {
    method: "post",
    headers: { "content-type": "application/json" },
    data
  });
  console.log(result);
  return result;
};
