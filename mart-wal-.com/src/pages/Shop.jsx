import { useState } from "react";
import { Products } from "../components/Products.jsx";
import { PromoContainer } from "../components/PromoContainer.jsx";
import { FilterBar } from "../components/FilterBar.jsx";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useFetchContext } from "../Context/FetchContext.jsx";
import { useCartContext } from '../Context/CartContext.jsx';

function Shop() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useFetchContext();
  const { addToCart } = useCartContext();

  return (
    <Box component="main">
      <PromoContainer>
        <Typography variant="h2" component="h2" gutterBottom>
          Shop for Products:
        </Typography>
        <FilterBar products={products} onFilterChange={setFilteredProducts} />
        { products.length > 0 ?         <Products products={filteredProducts}>
           {(product) => (
             <Button
                    size="medium"
                    sx={{ bgcolor: "black", color: "white", fontWeight: 800 }}
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button> 
          )}
        </Products> : <Typography variant="h4" component="p" textAlign="center">Loading...</Typography>}
      </PromoContainer>
    </Box>
  );
}

export { Shop };
