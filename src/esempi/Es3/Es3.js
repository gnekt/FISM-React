import { useState } from "react";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";



function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <Typography variant="h3" align="center">{title}</Typography>
      <Divider variant="middle" />
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Es3() {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={2} direction={"row"}>
        <Grid size={{xs: 12, md: 8, lg: 7, xl: 6}} >
          <Paper sx={{ padding: theme.spacing(2), height: "100%" }} elevation={7}>
            <Panel title="About">
              With a population of about 2 million, Almaty is Kazakhstan's
              largest city. From 1929 to 1997, it was its capital city.
            </Panel>
          </Paper>
        </Grid>
        <Grid size={{xs: 12, md: 4, lg: 5, xl: 6}}>
          <Paper sx={{ padding: 2, height: "100%" }} elevation={7}>
            <Panel title="Etymology">
              The name comes from <span lang="kk-KZ">алма</span>, the Kazakh
              word for "apple" and is often translated as "full of apples". In
              fact, the region surrounding Almaty is thought to be the ancestral
              home of the apple, and the wild <i lang="la">Malus sieversii</i>{" "}
              is considered a likely candidate for the ancestor of the modern
              domestic apple.
            </Panel>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
