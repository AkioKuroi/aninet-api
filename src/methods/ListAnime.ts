import axios from "axios";
import createApiMethod from "./createApiMethod";
import {
  ListAnimeStatus,
  ListAnimeResponse,
} from "../interfaces/ListAnimeTypes";

const BASE_URL: string = createApiMethod("ListAnime");
const BASE_URL_GUEST: string = createApiMethod("ListAnimeGuest");
const empty: string = "";

const ListAnime = async (
  isGuest: boolean,
  sort: string,
  genre: string,
  type: string,
  status: ListAnimeStatus,
  count: number,
  skip: number,
  name: string,
  onlyNew: boolean,
  hasVideo: boolean,
  translation: string,
  genreBan: string,
  isWeb: boolean
): Promise<ListAnimeResponse> => {
  return await axios
    .get(
      `${
        isGuest ? BASE_URL_GUEST : BASE_URL
      }?sort=${sort}&genre=${genre}&type=${type}&status=${status}&count=${count}&skip=${skip}&name=${name}&onlyNew=${onlyNew}&hasVideo=${hasVideo}&translation=${translation}&genreBan=${genreBan}&isWeb=${isWeb}`
    )
    .then((response) => response.data);
};

const ListAnimeDefault = async (
  lang: "ru" | "en" = "ru"
): Promise<ListAnimeResponse> => {
  return await ListAnime(
    true,
    "popularity",
    empty,
    "ova,tv,movie",
    "anons",
    10,
    0,
    empty,
    false,
    false,
    lang,
    empty,
    true
  );
};

export { ListAnime, ListAnimeDefault };
