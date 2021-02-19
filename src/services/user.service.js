import { doAPICall } from "../axios-instance";
export const getUserDetails = async () => {
  console.log("inside action");
  const result = await doAPICall("/api/v1/user/subscriptions", {
    method: "get",
    headers: { "content-type": "application/json" }
  });
  return result;
};
