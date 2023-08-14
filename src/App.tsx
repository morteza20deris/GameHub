import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "mein"`,
        lg: `"nav nav" "aside mein"`,
      }}
    >
      <GridItem area="nav" bgColor="coral">
        NAV
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="mein" bgColor="dodgerblue">
        Mein
      </GridItem>
    </Grid>
  );
}

export default App;
