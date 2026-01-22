import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Cart } from "./pages/Cart.jsx";
import { About } from "./pages/About.jsx";
import SignUp from "./pages/SignUp.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Footer } from "./components/Footer.jsx";
import { LogoutBtn } from "./components/LogoutBtn.jsx";
import { AddItemsToCart } from "./Context/CartContext.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import { FetchProducts } from "./Context/FetchContext.jsx";

function App() {
  return (
    <FetchProducts>
      <AddItemsToCart>
        <UserProvider>
          <NavBar />
          <LogoutBtn />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/About" element={<About />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </UserProvider>
      </AddItemsToCart>
    </FetchProducts>
  );
}

export default App;
