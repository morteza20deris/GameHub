import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import ImageUrl from "../Services/Image-url";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../hooks/useQueryStore";

export const isVPN = true;
const GenreList = () => {
  const { data, isLoading } = useGenres();
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const setGenreID = useGameQueryStore((s) => s.setGenreID);
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={2} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY={1} key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={
                  isVPN
                    ? ImageUrl(genre.image_background, 600, 400)
                    : genre.image_background
                }
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genreID === genre.id ? "bold" : "normal"}
                onClick={() => setGenreID(genre.id)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
