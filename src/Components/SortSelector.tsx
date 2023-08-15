import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSort: (selectedSort: string) => void;
  selectedSort: string;
}

export interface Sort {
  Value: string;
  label: string;
}

const SortSelector = ({ onSelectedSort, selectedSort }: Props) => {
  const orderList = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "Date Added" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Critic Score" },
  ];
  const selectSort = orderList.find(
    (sortItem) => sortItem.value === selectedSort
  );

  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        Sort by: {selectSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderList.map((sortItem) => (
          <MenuItem
            onClick={() => onSelectedSort(sortItem.value)}
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
