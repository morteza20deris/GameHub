import useGenres from "./useGenres"

export const useFindGenreByID = (genreID?:number) => {
    const { data } = useGenres()
    return data?.results.find(genre=>genre.id===genreID)
}
