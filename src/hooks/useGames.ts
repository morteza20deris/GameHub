import { useInfiniteQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<fetchedAPIResults<Game>,Error>({
    queryKey: ["games", gameQuery], queryFn: ({pageParam=1}) =>
      getGames.getAll({
        params:
        {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page:pageParam
        }
      }), getNextPageParam: (lastPage,allPages) => {
        return lastPage.next?allPages.length+1:undefined
      }
    
  })
    
    
export default useGames;
