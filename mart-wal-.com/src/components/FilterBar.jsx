import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

function FilterBar({ products, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  let filteredProducts = products ? [...products] : [];

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    );
  }

  switch (sortOrder) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "title-asc":
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  useEffect(() => {
    onFilterChange(filteredProducts);
  }, [searchTerm, category, sortOrder, products]);

  const uniqueCategories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 4 }}>
      <TextField
        label="Search products..."
        variant="outlined"
        size="normal"
        sx={{ flexGrow: 1, minWidth: "200px" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <FormControl size="normal" sx={{ minWidth: 150 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {uniqueCategories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="normal" sx={{ minWidth: 150 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortOrder}
          label="Sort By"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <MenuItem value="default">Default</MenuItem>
          <MenuItem value="price-asc">Price: Low to High</MenuItem>
          <MenuItem value="price-desc">Price: High to Low</MenuItem>
          <MenuItem value="title-asc">Title: A-Z</MenuItem>
          <MenuItem value="title-desc">Title: Z-A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export { FilterBar };
