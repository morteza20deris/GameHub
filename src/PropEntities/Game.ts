import  Genre  from "./Genre";
import  Platform  from "./Platform";
import  Publisher  from "./Publisher";


 interface Game {
  id: number;
  name: string;
  background_image: string;
  description: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  genres: Genre[]
  publishers: Publisher[];
  slug: string;
}
export default Game