import axios from "axios";
import createApiMethod from "./funcs/createApiMethod";

const BASE_URL = createApiMethod("Register");

const SignUp = async (name, password, email, genderId) => {
  const checkEmail = /^\S+@\S+\.\S+$/.test(email);
  if (!checkEmail) throw new Error("Invalid email format");
  const data = await axios
    .post(
      `${BASE_URL}?name=${name}&password=${password}&email=${email}&genderId=${genderId}&avatarId=1&google=false`
    )
    .then((response) => response.data);

  return data && !data.error ? data : null;
};

export { SignUp };
