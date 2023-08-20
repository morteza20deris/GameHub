import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedPlatformID: (selectedPlatform: number | undefined) => void;
  selectedPlatformID?: number | undefined;
}

const PlatformSelector = ({
  onSelectedPlatformID,
  selectedPlatformID,
}: Props) => {
  const { data, error } = usePlatforms();
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformID
  );
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
