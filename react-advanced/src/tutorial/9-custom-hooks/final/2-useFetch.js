import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);
  // recreate from scratch when url changes

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  // If getProducts is added without the useCallback, an infinite loop will be created
  return { loading, products };
};
