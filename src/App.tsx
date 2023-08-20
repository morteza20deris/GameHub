import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import PageHeader from "./Components/PageHeader";

export interface GameQuery {
  genreID?: number | undefined;
  platformID?: number | undefined;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <NavBar
          searchText={(searchText) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genreID}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreID: genre })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="mein">
        <Box paddingLeft={2}>
          <PageHeader gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformID={gameQuery.platformID}
              onSelectedPlatformID={(platformID) =>
                setGameQuery({ ...gameQuery, platformID })
              }
            />
            <SortSelector
              selectedSort={gameQuery.sortOrder}
              onSelectedSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
