import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";
import genres from "../Data/staticGenres";
import ms from "ms";

export interface Genre {
  id: number
  name: string
  image_background:string
}

const getGenre = new apiClient<Genre>("/genres")
const useGenres = () =>
  useQuery(
    {
      queryKey: ["genres"],
      queryFn:getGenre.getAll,
      staleTime: ms("24h"),
      initialData:genres
    })

export default useGenres;
