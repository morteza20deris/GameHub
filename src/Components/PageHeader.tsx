import { Text } from "@chakra-ui/react";
import { useFindGenreByID } from "../hooks/useFindGenreByID";
import useFindPlatformByID from "../hooks/useFindPlatformByID";
import useGameQueryStore from "../hooks/useQueryStore";

const PageHeader = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const genre = useFindGenreByID(genreID);

  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const platform = useFindPlatformByID(platformID);

  const txtDisplay = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Text fontSize={50}>{txtDisplay}</Text>;
};

export default PageHeader;
