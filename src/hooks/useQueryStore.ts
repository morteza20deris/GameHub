import { create } from "zustand";
import  GameQueryProps  from "../PropEntities/GameQueryProps";

const useGameQueryStore = create<GameQueryProps>(set => ({
    gameQuery: {},
    setGenreID: (genreID) => set(store=>({gameQuery:{...store.gameQuery,genreID}})),
    setPlatformID: (platformID) => set((store)=>({gameQuery:{...store.gameQuery,platformID}})),
    setSearchText: (searchText) => set(()=>({gameQuery:{searchText}})),
    setSortOrder: (sortOrder) => set((store)=>({gameQuery:{...store.gameQuery,sortOrder}}))
        
}))
export default useGameQueryStore