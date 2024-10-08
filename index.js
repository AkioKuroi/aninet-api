import { GetRelease } from "./src/methods/GetRelease";
import { GetUserProfile } from "./src/methods/GetUserProfile";
import {
  ListAnime,
  ListAnimeById,
  ListAnimeDefault,
} from "./src/methods/ListAnime";
import { SignIn } from "./src/methods/SignIn";
import { SignUp } from "./src/methods/SignUp";
import { ANINET_API_URL } from "./src/global";
import createApiMethod from "./src/methods/funcs/createApiMethod";

export {
  GetRelease,
  GetUserProfile,
  ListAnime,
  ListAnimeById,
  ListAnimeDefault,
  SignIn,
  SignUp,
  ANINET_API_URL,
  createApiMethod,
};
