import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImageUrl from "../Services/Image-url";
import  Game  from "../PropEntities/Game";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      >
        <Image
          overflow="hidden"
          borderRadius={10}
          src={ImageUrl(game.background_image, 600, 400)}
        />
        <CardBody>
          <HStack marginBottom={3} justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
