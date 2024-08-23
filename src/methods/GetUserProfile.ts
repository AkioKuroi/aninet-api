import axios from "axios";
import { UserProfile } from "../interfaces/UserProfile";
import createApiMethod from "./funcs/createApiMethod";

const BASE_URL = createApiMethod("User");

const GetUserProfile = async (userId: number): Promise<UserProfile | null> => {
  const profile: UserProfile | undefined = await axios
    .get(`${BASE_URL}?id=${userId}`)
    .then((response) => response.data);
  return profile ? profile : null;
};

export { GetUserProfile };
