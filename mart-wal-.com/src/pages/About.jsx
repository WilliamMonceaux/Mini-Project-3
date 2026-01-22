import { Grid, Typography, Container, Box } from "@mui/material";

function About() {
  return (
    <main>
      <Box component="main">
        <Container maxWidth="lg" sx={{ my: 8 }}>
          <Grid component="section" container justifyContent="center">
            <Grid item sx={{ xs: 12, md: 10 }}>
              <Typography
                variant="h4"
                component="body1"
                align="center"
                sx={{ lineHeight: 2 }}
              >
                This project is to demonstrate my ability to apply using and
                creating React Components, using hooks, fetching and displaying
                data from external API, integrating React UI Library (This case
                Material UI), and with Git commits and pushes.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}

export { About };
