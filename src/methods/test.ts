import { UserAnimeResponse } from "../interfaces/ListAnimeTypes";
import { ListAnimeById, ListAnimeDefault } from "./ListAnime";
(async () => {
  console.log(await ListAnimeDefault());
  let found: boolean = false;
  while (true) {
    const randomUserId = Math.floor(Math.random() * 819000);
    const anime: UserAnimeResponse[] | null = await ListAnimeById(
      randomUserId,
      "completed"
    );
    if (anime) {
      console.log("\n\n\n\nUser:", randomUserId);
      console.log(anime);
      break;
    }
  }
})();
