import { SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  // throw new Error();

  const { data, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletonNumber = [1, 2, 3, 4, 5];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        loader={<Spinner />}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        dataLength={fetchedGamesCount}
      >
        <SimpleGrid
          padding="10px"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {isLoading &&
            skeletonNumber.map((skeleton) => (
              <GameCardSkeleton key={skeleton} />
            ))}
          {data &&
            data.pages.map((page) =>
              page.results.map((game) => <GameCard game={game} key={game.id} />)
            )}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
