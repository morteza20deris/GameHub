import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useFindPlatformByID from "../hooks/useFindPlatformByID";

interface Props {
  onSelectedPlatformID: (selectedPlatform: number | undefined) => void;
  selectedPlatformID?: number | undefined;
}

const PlatformSelector = ({
  onSelectedPlatformID,
  selectedPlatformID,
}: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = useFindPlatformByID(selectedPlatformID);
  if (error) return;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatformID(platform.id)}
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
