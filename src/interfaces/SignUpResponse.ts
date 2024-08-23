import { Rank } from "./UserProfile";

export default interface SignUpResponse {
  email: string | null;
  error: boolean;
  gender: string;
  googleEmail: string | null;
  image: string;
  isAdmin: boolean;
  name: string;
  rank: Rank[];
  refreshToken: string;
  token: string;
  tokenCreated: string;
  userId: string;
  vkEmail: string | null;
}
