import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient from "../api-client";
import { Game } from "../PropEntities/Game";



const getGameDetails = new apiClient<Game>("/games")

export const useGetGameDetails = (slug:string) => {
   return useQuery({
        queryKey: ["games",slug],
        queryFn:()=> getGameDetails.get(slug),
        staleTime:ms("24h")
    })

    
}
export default useGetGameDetails