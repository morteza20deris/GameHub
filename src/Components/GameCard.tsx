import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImageUrl from "../Services/Image-url";
import Game from "../PropEntities/Game";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const TXTcolor = useColorModeValue("white", "black");

  return (
    <>
      <Link to={`/games/${game.slug}`}>
        <Card
          variant="filled"
          bgColor="gray.700"
          _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
          }}
        >
          <Image
            overflow="hidden"
            borderTopRadius={5}
            borderBottomRadius={10}
            src={ImageUrl(game.background_image, 600, 400)}
          />
          <CardBody color="black">
            <HStack marginBottom={3} justifyContent="space-between">
              <PlatformIconList
                platforms={game.parent_platforms?.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading color={TXTcolor} fontSize="2xl">
              {game.name}
            </Heading>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default GameCard;
