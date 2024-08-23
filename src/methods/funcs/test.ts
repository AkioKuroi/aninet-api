import { UserAnimeResponse } from "../../interfaces/ListAnimeTypes";
import { GetUserProfile } from "../GetUserProfile";
import { ListAnimeById, ListAnimeDefault } from "../ListAnime";
import { GetRelease } from "../GetRelease";
const PrintLog = (message: string): void => {
  console.log(`\n\n\n[${new Date().toISOString()}] [LOG] ${message}\n\n\n`);
};

(async () => {
  PrintLog("Anime List Test (Guest Mode)");
  console.log(await ListAnimeDefault());
  let found: boolean = false;
  let randomUserId: number;
  while (true) {
    randomUserId = Math.floor(Math.random() * 819000);
    const anime: UserAnimeResponse[] | null = await ListAnimeById(
      randomUserId,
      "completed"
    );
    if (anime) {
      PrintLog(`User: ${randomUserId}`);
      console.log(anime);
      break;
    }
  }
  PrintLog("Profile Test");
  console.log(await GetUserProfile(329188));

  PrintLog("Release Test");
  console.log(await GetRelease(54857));
})();
