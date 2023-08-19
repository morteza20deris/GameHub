import { useQuery } from "@tanstack/react-query"
import apiClient from "../api-client"
export interface Platform{
    id: number
    name: string
    slug:string
}

const getPlatforms = new apiClient<Platform>("/platforms/lists/parents")
const usePlatforms = () =>
   useQuery({
    queryKey: ["platforms"],
    queryFn: getPlatforms.getAll
  })

  
  
export default usePlatforms