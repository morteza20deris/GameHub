import { Button } from "@chakra-ui/react";
import useGameQueryStore from "../hooks/useQueryStore";
const ClearFiltersButton = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return <Button onClick={() => setSearchText("")}>Clear Filters</Button>;
};

export default ClearFiltersButton;
