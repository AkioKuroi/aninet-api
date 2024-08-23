import SignUpResponse from "../interfaces/SignUpResponse";
import createApiMethod from "./funcs/createApiMethod";
import axios from "axios";

const BASE_URL: string = createApiMethod("Login");

const SignIn = async (
  email: string,
  password: string
): Promise<SignUpResponse | null> => {
  const data: SignUpResponse | undefined = await axios
    .post(`${BASE_URL}?email=${email}&password=${password}`)
    .then((response) => response.data);

  return data && !data.error ? data : null;
};

export { SignIn };
