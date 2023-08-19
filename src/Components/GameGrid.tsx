import { Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, fetchNextPage } = useGames(gameQuery);

  const skeletonNumber = [1, 2, 3, 4, 5];

  return (
    <>
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={6}
      >
        {isLoading &&
          skeletonNumber.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data &&
          data.pages.map((page) =>
            page.results.map((game) => <GameCard game={game} key={game.id} />)
          )}
        <Button onClick={() => fetchNextPage()}>Load More...</Button>
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
