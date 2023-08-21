import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useFindPlatformByID from "../hooks/useFindPlatformByID";
import useGameQueryStore from "../hooks/useQueryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const setPlatformID = useGameQueryStore((s) => s.setPlatformID);
  const selectedPlatform = useFindPlatformByID(platformID);
  if (error) return;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformID(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
