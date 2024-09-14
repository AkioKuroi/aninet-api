import createApiMethod from "./funcs/createApiMethod";
import axios from "axios";

const BASE_URL = createApiMethod("Login");

const SignIn = async (email, password) => {
  const data = await axios
    .post(`${BASE_URL}?email=${email}&password=${password}`)
    .then((response) => response.data);

  return data && !data.error ? data : null;
};

export { SignIn };
