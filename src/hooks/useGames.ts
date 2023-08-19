import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { fetchedAPIResults } from "../api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const getGames = new APIClient<Game>("/games")

const useGames = (gameQuery: GameQuery) => 
  useQuery<fetchedAPIResults<Game>,Error>({
    queryKey: ["games", gameQuery], queryFn: () =>
      getGames.getAll({
        params:
        {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery?.sortOrder,
          search:gameQuery?.searchText
        }
      })
    
  })
    
    
export default useGames;
