import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid";
import GenreList from "../Components/GenreList";
import PageHeader from "../Components/PageHeader";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"mein"`,
        lg: `"aside mein"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "251px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="mein">
        <Box paddingLeft={2}>
          <PageHeader />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
