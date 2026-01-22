import { useContext } from "react";
import { Button } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { Products } from "../components/Products.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import { PromoContainer } from "../components/PromoContainer.jsx";

function Cart() {
  const { cart, removeProduct } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mt: "3rem",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Typography component="h2" variant="h4">
          Cart is currently empty. Please go into the Shop and add products to
          the cart.
        </Typography>
      </Box>
    );
  }

  return (
    <PromoContainer>
      <Products products={cart}>
        {(product) => (
          <Button
            variant="contained"
            size="medium"
            sx={{ bgcolor: "#CC0000", color: "white", fontWeight: "bold" }}
            onClick={(e) => {
              e.preventDefault();
              removeProduct(product.id);
            }}
          >
            Remove Item
          </Button>
        )}
      </Products>
      <Box sx={{ mt: 4 }}>
        {cart ? (
          <Typography sx={{ fontSize: "1.6rem" }}>
            Subtotal ({cart.length} items): $
            {cart.reduce(
              (accumulator, product) => accumulator + product.price,
              0,
            )}
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </PromoContainer>
  );
}

export { Cart };
