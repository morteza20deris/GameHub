import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const PageHeader = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreID);

  const txtDisplay = `${gameQuery.platformID?.name || ""} ${
    genre?.name || ""
  } Games`;

  return <Text fontSize={50}>{txtDisplay}</Text>;
};

export default PageHeader;
