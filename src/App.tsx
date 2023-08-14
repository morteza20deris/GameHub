import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "mein"`,
        lg: `"nav nav" "aside mein"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="mein">Mein</GridItem>
    </Grid>
  );
}

export default App;
