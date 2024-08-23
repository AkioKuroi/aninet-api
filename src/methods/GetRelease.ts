import axios from "axios";
import { ListAnimeResponse } from "../interfaces/ListAnimeTypes";
import createApiMethod from "./funcs/createApiMethod";

const BASE_URL: string = createApiMethod("GetDescription");

const GetRelease = async (
  animeId: number,
  lang: "ru" | "en" = "ru"
): Promise<ListAnimeResponse | null> => {
  const data: ListAnimeResponse | undefined = await axios
    .get(
      `${BASE_URL}?id=${animeId}&translation=${lang}&isBlocked=false&isWeb=true&showAllVideos=true`
    )
    .then((response) => response.data);

  return data ? data : null;
};

export { GetRelease };
