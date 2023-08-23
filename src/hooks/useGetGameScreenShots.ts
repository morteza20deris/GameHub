import { useQuery } from "@tanstack/react-query";
import  GameScreenShotProps  from "../PropEntities/GameScreenShotprops"
import APIClient from "../api-client"
import ms from "ms";




const useGetGameScreenShots = (gameId:number) => {
    const getScreenShots = new APIClient<GameScreenShotProps>(`games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: getScreenShots.getAll,
        staleTime:ms("24h")
        
    })
  
}

export default useGetGameScreenShots