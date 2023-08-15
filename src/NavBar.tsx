import { HStack, Image } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import SearchInput from "./Components/SearchInput";
interface Props {
  searchText: (searchText: string) => void;
}
const NavBar = ({ searchText }: Props) => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="60px" />
      <SearchInput searchText={(searchedText) => searchText(searchedText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
