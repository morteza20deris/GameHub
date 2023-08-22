import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import SearchInput from "./Components/SearchInput";
import logo from "./assets/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack padding="15px">
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
