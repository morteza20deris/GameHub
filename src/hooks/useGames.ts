import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { fetchedAPIResults } from "../api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "./useQueryStore";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  description: string
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug:string
}

const getGames = new APIClient<Game>("/games")

const useGames = () => 
{
    const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<fetchedAPIResults<Game>, Error>({
    queryKey: ["games", gameQuery], queryFn: ({pageParam=1}) =>
      getGames.getAll({
        params:
        {
          genres: gameQuery?.genreID,
          platforms: gameQuery.platformID,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page:pageParam
        }
      }), getNextPageParam: (lastPage,allPages) => {
        return lastPage.next?allPages.length+1:undefined
      }
    ,staleTime : ms("24h")
  })
}
    
    
export default useGames;
