import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../Components/ExpandableText";
import { GameAttributes } from "../Components/GameAttributes";
import { useGetGameDetails } from "../hooks/useGetGameDetails";
import { GameTrailersPlayer } from "../Components/GameTrailersPlayer";
import { GameScreenShots } from "./GameScreenShots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGetGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (!game || error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText content={game.description} />
      <GameAttributes game={game} />
      <GameTrailersPlayer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};

export default GameDetails;
