import { useQuery } from "@tanstack/react-query"
import apiClient from "../api-client"
import staticPatforms from "../Data/staticPatforms"
import ms from "ms"
export interface Platform{
    id: number
    name: string
    slug:string
}

const getPlatforms = new apiClient<Platform>("/platforms/lists/parents")
const usePlatforms = () =>
   useQuery({
    queryKey: ["platforms"],
     queryFn: getPlatforms.getAll,
     staleTime: ms("24h"),
     initialData:staticPatforms
    
  })

  
  
export default usePlatforms