import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../PropEntities/Game";
import CriticScore from "./CriticScore";
import { GameAttributeDetails } from "./GameAttributeDetails";

interface Props {
  game: Game;
}

export const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <GameAttributeDetails title="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameAttributeDetails>

      <GameAttributeDetails title="CriticScore">
        {<CriticScore score={game.metacritic} />}
      </GameAttributeDetails>

      <GameAttributeDetails title="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameAttributeDetails>

      <GameAttributeDetails title="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameAttributeDetails>
    </SimpleGrid>
  );
};
