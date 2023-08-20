import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";

export interface Genre {
  id: number
  name: string
  image_background:string
}

const getGenre = new apiClient<Genre>("/genres")
const useGenres = () =>
  useQuery(
    {
      queryKey: ["genres"], queryFn:
        getGenre.getAll,
      staleTime : 24*60*60*1000
    })

export default useGenres;
