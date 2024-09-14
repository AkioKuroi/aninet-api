import axios from "axios";
import createApiMethod from "./funcs/createApiMethod";

const BASE_URL = createApiMethod("User");

const GetUserProfile = async (userId) => {
  const profile = await axios
    .get(`${BASE_URL}?id=${userId}`)
    .then((response) => response.data);
  return profile ? profile : null;
};

export { GetUserProfile };
