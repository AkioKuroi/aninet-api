import axios from "axios";
import createApiMethod from "./funcs/createApiMethod";

const BASE_URL = createApiMethod("GetDescription");

const GetRelease = async (animeId, lang) => {
  const data = await axios
    .get(
      `${BASE_URL}?id=${animeId}&translation=${lang}&isBlocked=false&isWeb=true&showAllVideos=true`
    )
    .then((response) => response.data);

  return data ? data : null;
};

export { GetRelease };
