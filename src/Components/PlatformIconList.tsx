import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaApple,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiAtari,
  SiCommodore,
  SiD3Dotjs,
  SiNintendo,
  SiSega,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Badge, HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Platform from "../PropEntities/Platform";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
    sega: SiSega,
    "3do": SiD3Dotjs,

    web: BsGlobe,
  };

  const previewPlatforms = platforms.slice(0, 4);

  return (
    <>
      <HStack marginY={2}>
        {previewPlatforms?.map((plat) => (
          <Icon key={plat.id} as={iconMap[plat.slug]} color="gray.500" />
        ))}
        {platforms.length > 4 && (
          <Badge colorScheme="gray" paddingX={2} borderRadius={6}>
            +{platforms.length - 4}
          </Badge>
        )}
      </HStack>
    </>
  );
};

export default PlatformIconList;
