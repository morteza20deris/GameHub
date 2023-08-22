import { useQuery } from "@tanstack/react-query"
import apiClient from "../api-client"
import staticPlatforms from "../Data/staticPlatforms"
import ms from "ms"
import { Platform } from "../PropEntities/Platform"
const getPlatforms = new apiClient<Platform>("/platforms/lists/parents")
const usePlatforms = () =>
   useQuery({
    queryKey: ["platforms"],
     queryFn: getPlatforms.getAll,
     staleTime: ms("24h"),
     initialData:staticPlatforms
    
  })

  
  
export default usePlatforms