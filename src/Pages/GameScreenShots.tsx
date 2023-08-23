import { Image, SimpleGrid } from "@chakra-ui/react";
import useGetGameScreenShots from "../hooks/useGetGameScreenShots";
interface Props {
  gameId: number;
}
export const GameScreenShots = ({ gameId }: Props) => {
  const { data: screenShots } = useGetGameScreenShots(gameId);

  return (
    <SimpleGrid spacing={2} columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}>
      {screenShots?.results.map((screenShot) => (
        <Image
          _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
          }}
          key={screenShot.id}
          src={screenShot.image}
        />
      ))}
    </SimpleGrid>
  );
};
