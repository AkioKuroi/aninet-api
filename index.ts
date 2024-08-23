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
import {
  ListAnimeKind,
  ListAnimeRelated,
  ListAnimeResponse,
  ListAnimeScreenshot,
  ListAnimeStatus,
  ListAnimeStudio,
} from "./src/interfaces/ListAnimeTypes";
import { Rank, UserProfile, Gender } from "./src/interfaces/UserProfile";
import SignUpResponse from "./src/interfaces/SignUpResponse";

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
  ListAnimeKind,
  ListAnimeRelated,
  ListAnimeResponse,
  ListAnimeScreenshot,
  ListAnimeStatus,
  ListAnimeStudio,
  Rank,
  UserProfile,
  Gender,
  SignUpResponse,
};
