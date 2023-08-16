import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const PageHeader = ({ gameQuery }: Props) => {
  const txtDisplay = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <Text fontSize={50}>{txtDisplay}</Text>;
};

export default PageHeader;
