import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import offlineGames from "./newGame";
import { isVPN } from "./GenreList";

const GameGrid = () => {
  const { data, isLoading } = useGames();
  const skeletonNumber = [1, 2, 3, 4, 5];
  let gamesToShow = data;

  isVPN ? (gamesToShow = data) : (gamesToShow = offlineGames);

  return (
    <>
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
      >
        {isLoading &&
          skeletonNumber.map((skel) => <GameCardSkeleton key={skel} />)}
        {gamesToShow.length > 0 &&
          gamesToShow.map((game) => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
