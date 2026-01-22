import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const FetchContext = React.createContext();

function FetchProducts({ children }) {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/shop/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error: Could not fetch data.", error.message);
      }
    };

    fetchProducts();
  }, []);

  return(<FetchContext.Provider value={{products}}>
    { children }
  </FetchContext.Provider>
)}

export const useFetchContext = () => {
  return useContext(FetchContext);
};

export { FetchProducts };