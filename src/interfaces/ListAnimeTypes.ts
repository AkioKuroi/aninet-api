type ListAnimeStatuses = "anons" | "ongoing" | "released";
type ListAnimeStatus =
  | `${ListAnimeStatuses}`
  | `${ListAnimeStatuses},${ListAnimeStatuses}`
  | `${ListAnimeStatuses},${ListAnimeStatuses},${ListAnimeStatuses}`;
type ListAnimeKind = {
  kindId: number;
  name: string;
};
type ListAnimeRelated = {
  anilibiraId: number;
  animeId: number;
  currentEpisodes: number;
  date: string;
  episodes: number;
  fullImageLink: string;
  image: string;
  imageWorldArt: string;
  kind: number;
  malImage: string;
  memberCount: number;
  name: string;
  rateCount: string;
  rating: number;
  russianName: string;
  suggestedId: number;
  suggestorName: string | null;
  userRating: number;
  userState: string;
};

type ListAnimeScreenshot = {
  animeId: number;
  fUllPreview: string;
  fullOriginal: string;
  id: number;
  original: string;
  preview: string;
};

type ListAnimeStudio = {
  name: string;
  studioId: number;
};

type Genre = {
  genreId: number;
  name: string;
  russName: string;
};

interface ListAnimeResponse {
  anilibriId: number;
  anilibriaCount: number;
  animeId: number;
  animeVostCount: number;
  animeVostId: number;
  cdnEpisodes: [];
  commentsCount: number;
  continueEpisode: null;
  continueEpisodes: number;
  date: string;
  description: string;
  engDescription: string;
  episodes: number;
  favoriteSettings: null;
  fullImageLink: string;
  fullScreenshotLink: string;
  genres: Genre[];
  image: string;
  imageWorldArt: string;
  isFavorite: boolean;
  isLibriaFullHd: boolean;
  isRomanticaBlocked: boolean;
  kind: ListAnimeKind[] | number;
  kodikId: number | null;
  kodikStudios: string[] | null;
  malImage: string;
  memberCount: number;
  name: string;
  nextEpisodeAt: null;
  popularity: number;
  rating: number;
  related: ListAnimeRelated[];
  russianName: string;
  score: number;
  screenshot: string;
  screenshots: ListAnimeScreenshot[];
  skips: [];
  sovetRomanticaCount: number;
  sovetRomanticaEpisodes: [];
  status: ListAnimeStatus;
  studio: ListAnimeStudio[];
  userNote: string | null;
  userRating: number;
  userState: "completed" | "plantowatch" | "banned" | null;
  videoLink: string | null;
  vidStreamingDub: [];
  vidStreamingSub: [];
}

interface UserAnimeResponse {
  animeId: number;
  name: string;
  russianName: string;
  image: string;
  date: string;
  rating: number;
  episodes: number;
  currentEpisodes: number;
  rateCount: number;
  memberCount: number;
  kind: number;
  imageWorldArt: string;
  userState: "completed" | "plantowatch" | "banned" | null;
  userRating: number;
  suggestedId: number;
  suggestorName: string | null;
  friendRating: number;
  studioId: number;
  status: ListAnimeStatus;
  hasVideo: boolean;
  fullImageLink: string;
  malImage: string;
}

export {
  ListAnimeStatus,
  ListAnimeKind,
  ListAnimeRelated,
  ListAnimeScreenshot,
  ListAnimeStudio,
  ListAnimeResponse,
  UserAnimeResponse,
};
