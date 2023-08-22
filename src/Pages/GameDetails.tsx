import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetGameDetails } from "../hooks/useGetGameDetails";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGetGameDetails(slug!);
  if (isLoading) return <Spinner />;
  if (!game || error) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
    </>
  );
};

export default GameDetails;
