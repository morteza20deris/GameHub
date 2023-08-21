import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../hooks/useQueryStore";

export interface Sort {
  Value: string;
  label: string;
}

const SortSelector = () => {
  const orderList = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "Date Added" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Critic Score" },
  ];
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectSort = orderList.find((sortItem) => sortItem.value === sortOrder);

  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        Sort by: {selectSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderList.map((sortItem) => (
          <MenuItem
            onClick={() => setSortOrder(sortItem.value)}
            value={sortItem.value}
            key={sortItem.value}
          >
            {sortItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
