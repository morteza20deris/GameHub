import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaApple,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Platform from "../PropEntities/Platform";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={2}>
        {platforms?.map((plat) => (
          <Icon key={plat.id} as={iconMap[plat.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
