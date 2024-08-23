import { GetRelease } from "./methods/GetRelease";
import { GetUserProfile } from "./methods/GetUserProfile";
import {
  ListAnime,
  ListAnimeById,
  ListAnimeDefault,
} from "./methods/ListAnime";
import { SignIn } from "./methods/SignIn";
import { SignUp } from "./methods/SignUp";
import { ANINET_API_URL } from "./global";
import createApiMethod from "./methods/funcs/createApiMethod";
import {
  ListAnimeKind,
  ListAnimeRelated,
  ListAnimeResponse,
  ListAnimeScreenshot,
  ListAnimeStatus,
  ListAnimeStudio,
} from "./interfaces/ListAnimeTypes";
import { Rank, UserProfile, Gender } from "./interfaces/UserProfile";
import SignUpResponse from "./interfaces/SignUpResponse";

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
