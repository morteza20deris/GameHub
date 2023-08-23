import { useQuery } from "@tanstack/react-query";
import { GameScreenShotProps } from "../PropEntities/GameScreenShotprops"
import APIClient from "../api-client"




const useGetGameScreenShots = (gameId:number) => {
    const getScreenShots = new APIClient<GameScreenShotProps>(`games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn:getScreenShots.getAll
    })
  
}

export default useGetGameScreenShots