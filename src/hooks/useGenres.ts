import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";
import genres from "../Data/staticGenres";
import ms from "ms";
import  Genre  from "../PropEntities/Genre";

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
