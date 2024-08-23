import { UserAnimeResponse } from "../../interfaces/ListAnimeTypes";
import { GetUserProfile } from "../GetUserProfile";
import { ListAnimeById, ListAnimeDefault } from "../ListAnime";
import { GetRelease } from "../GetRelease";
import { SignUp } from "../SignUp";
import { SignIn } from "../SignIn";

const PrintLog = (message: string): void => {
  console.log(`\n\n\n[${new Date().toISOString()}] [LOG] ${message}\n\n\n`);
};

const createRandomString = (length: number): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
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

  PrintLog("Sign Up Test");
  const name: string = `Test_${createRandomString(20)}`;
  console.log(`Name: ${name}`);
  console.log(
    await SignUp(
      name,
      "Test_Password",
      `a${createRandomString(30)}@mail.com`,
      1
    )
  );

  PrintLog("Sign In Test");
  console.log(
    await SignIn("aQ6DeF2RE1iufibKaj3FEKX39SqUZyp@mail.com", "Test_Password")
  );
})();
