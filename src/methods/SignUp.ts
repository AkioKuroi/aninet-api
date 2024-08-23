import axios from "axios";
import SignUpResponse from "../interfaces/SignUpResponse";
import createApiMethod from "./funcs/createApiMethod";

const BASE_URL: string = createApiMethod("Register");
type genderId = 1 | 2;

const SignUp = async (
  name: string,
  password: string,
  email: string,
  genderId: genderId
): Promise<SignUpResponse | null> => {
  const checkEmail = /^\S+@\S+\.\S+$/.test(email);
  if (!checkEmail) throw new Error("Invalid email format");
  const data: SignUpResponse | undefined = await axios
    .post(
      `${BASE_URL}?name=${name}&password=${password}&email=${email}&genderId=${genderId}&avatarId=1&google=false`
    )
    .then((response) => response.data);

  return data && !data.error ? data : null;
};

export { SignUp };
