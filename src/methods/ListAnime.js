import axios from "axios";
import createApiMethod from "./funcs/createApiMethod";

const BASE_URL = createApiMethod("ListAnime");
const BASE_URL_GUEST = createApiMethod("ListAnimeGuest");
const empty = "";

const ListAnime = async (
  isGuest,
  sort,
  genre,
  type,
  status,
  count,
  skip,
  name,
  onlyNew,
  hasVideo,
  translation,
  genreBan,
  isWeb
) => {
  const data = await axios
    .get(
      `${
        isGuest ? BASE_URL_GUEST : BASE_URL
      }?sort=${sort}&genre=${genre}&type=${type}&status=${status}&count=${count}&skip=${skip}&name=${name}&onlyNew=${onlyNew}&hasVideo=${hasVideo}&translation=${translation}&genreBan=${genreBan}&isWeb=${isWeb}`
    )
    .then((response) => response.data);
  return data && data.length > 0 ? data : null;
};

const ListAnimeDefault = async (lang) => {
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

const ListAnimeById = async (userId, userState) => {
  const data = await axios
    .get(
      `${BASE_URL}?sort=&genre=&type=ova,tv,movie&status=released,ongoing,anons&count=50&skip=0&name=&userId=${userId}&userState=${userState}&userOrder=latest&genreBan=`
    )
    .then((response) => response.data);
  return data && data.length > 0 ? data : null;
};

export { ListAnime, ListAnimeDefault, ListAnimeById };
