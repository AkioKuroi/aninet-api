type Gender = {
  genderId: 1 | 2;
  name: "Female" | "Male";
};

type Rank = {
  commentLength: number;
  firstColor: string;
  nameEng: string;
  nameRus: string;
  rankId: number;
  requiredMMR: number;
  secondColor: string;
};

interface UserProfile {
  avatarId: number;
  averageScore: number;
  background: string;
  banned: number;
  comments: number;
  completed: number;
  crown: boolean | null;
  days: number;
  dislikes: number;
  email: string | null;
  friendCount: number;
  fullScreenshotLink: string;
  gender: Gender;
  google: boolean;
  hentai: boolean;
  hours: number;
  imageUrl: string;
  inviteCount: number;
  isBanned: boolean;
  isMyFriend: boolean;
  lastOnline: string;
  likes: number;
  mmr: number;
  name: string;
  planned: number;
  rank: Rank[];
  screenshotAnimeId: number;
  suggestedCount: number;
  totalEpisodes: number;
  unBannedTime: string;
  userId: number;
}

export { Gender, Rank, UserProfile };
