import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindPlatformByID from "../hooks/useFindPlatformByID";
import { useFindGenreByID } from "../hooks/useFindGenreByID";

interface Props {
  gameQuery: GameQuery;
}

const PageHeader = ({ gameQuery }: Props) => {
  const genre = useFindGenreByID(gameQuery.genreID);
  const platform = useFindPlatformByID(gameQuery.platformID);

  const txtDisplay = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Text fontSize={50}>{txtDisplay}</Text>;
};

export default PageHeader;
