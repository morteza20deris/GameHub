import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import ImageUrl from "../Services/Image-url";
import { Genre } from "../hooks/useGenres";
import { Heading } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (selectedGenre: Genre) => void;
  selectedGenre?: Genre | null;
}

export const isVPN = true;
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  let genres: Genre[];
  if (isVPN) {
    genres = data;
  } else {
    genres = [
      {
        id: 0,
        name: "Action",
        image_background:
          "https://assets.mspimages.in/gear/wp-content/uploads/2023/01/actio-games.jpg",
      },
      {
        id: 1,
        name: "RPG",
        image_background:
          "https://assets.mspimages.in/gear/wp-content/uploads/2023/01/actio-games.jpg",
      },
    ];
  }
  return (
    <>
      <Heading marginBottom={2} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
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
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
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
