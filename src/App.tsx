import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "mein"`,
        lg: `"nav nav" "aside mein"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "251px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectedGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}
          />
        </GridItem>
      </Show>
      <GridItem area="mein">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
