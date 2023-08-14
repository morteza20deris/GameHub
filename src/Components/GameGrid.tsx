import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { errors, games } = useGames();
  return (
    <>
      {errors && <Text color="red">{errors}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
};

export default GameGrid;
