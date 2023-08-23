import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import SearchInput from "./Components/SearchInput";
import logo from "./assets/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack padding="15px">
        <Link to="/">
          <Image objectFit="cover" src={logo} boxSize="60px" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
