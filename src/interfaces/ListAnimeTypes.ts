type ListAnimeStatus = "anons" | "ongoing" | "released";
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
  genres: string[];
  image: string;
  imageWorldArt: string;
  isFavorite: boolean;
  isLibriaFullHd: boolean;
  isRomanticaBlocked: boolean;
  kind: ListAnimeKind[];
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
  userState: null;
  videoLink: string | null;
  vidStreamingDub: [];
  vidStreamingSub: [];
}

export {
  ListAnimeStatus,
  ListAnimeKind,
  ListAnimeRelated,
  ListAnimeScreenshot,
  ListAnimeStudio,
  ListAnimeResponse,
};
