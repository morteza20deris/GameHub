import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { fetchedAPIResults } from "../api-client";
import useGameQueryStore from "./useQueryStore";
import { Game } from "../PropEntities/Game";

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
