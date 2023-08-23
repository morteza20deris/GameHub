import  GameQuery  from "./GameQuery";

 interface GameQueryProps {
  gameQuery: GameQuery;
  setGenreID: (genreID: number) => void;
  setPlatformID: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}
export default GameQueryProps