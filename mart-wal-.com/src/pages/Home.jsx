import { Products } from "../components/Products";
import { Box, Typography } from "@mui/material";
import { useFetchContext } from "../Context/FetchContext";

function Home() {
  const { products } = useFetchContext();
  const featuredProducts = products.slice(0, 4);

  return (
    <Box component="main">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        sx={{ my: 4, fontWeight: "Bold" }}
      >
        Quality finds, Cheaper prices
      </Typography>
      <Typography
        variant="h4"
        component="p"
        align="center"
        sx={{
          mb: 6,
          maxWidth: "700px",
          fontFamily: "Roboto",
          mx: "auto",
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        Here you can find an assortment of products ranging from Men's Clothing,
        Jewerly, Electronics, and Women's Clothing.
      </Typography>

      <Typography
        variant="h3"
        component="h3"
        gutterBottom
        sx={{ fontWeight: "Bold", textAlign: "center", mt: "8rem" }}
      >
        Featured Products
      </Typography>

      <Box component="section" sx={{ p: 4, width: "100%" }}>
        {featuredProducts.length > 0 ? (
          <Products products={featuredProducts} />
        ) : (
          <Typography variant="h4" component="p" textAlign="center">
            Loading...
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export { Home };
