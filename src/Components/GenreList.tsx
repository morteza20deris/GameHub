import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import ImageUrl from "../Services/Image-url";
import { Genre } from "../hooks/useGenres";

export const isVPN = false;
const GenreList = () => {
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
        id: 0,
        name: "Action",
        image_background:
          "https://assets.mspimages.in/gear/wp-content/uploads/2023/01/actio-games.jpg",
      },
    ];
  }
  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={
                isVPN
                  ? ImageUrl(genre.image_background, 600, 400)
                  : genre.image_background
              }
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
