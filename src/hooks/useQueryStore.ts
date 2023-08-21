import { create } from "zustand";

interface GameQuery {
  genreID?: number | undefined;
  platformID?: number | undefined;
  sortOrder?: string;
  searchText?: string;
}
interface Props{
    gameQuery: GameQuery
    setGenreID: (genreID: number) => void
    setPlatformID: (platformID: number) => void
    setSortOrder: (sortOrder: string) => void
    setSearchText: (searchText: string) => void
}
const useGameQueryStore = create<Props>(set => ({
    gameQuery: {},
    setGenreID: (genreID) => set(store=>({gameQuery:{...store.gameQuery,genreID}})),
    setPlatformID: (platformID) => set((store)=>({gameQuery:{...store.gameQuery,platformID}})),
    setSearchText: (searchText) => set(()=>({gameQuery:{searchText}})),
    setSortOrder: (sortOrder) => set((store)=>({gameQuery:{...store.gameQuery,sortOrder}}))
        
}))
export default useGameQueryStore