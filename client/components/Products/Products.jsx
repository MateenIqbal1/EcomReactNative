import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductsCard from './ProductsCard';
import ProductsData from '../../components/data/ProductsData';
import { useNavigation } from "@react-navigation/native";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Key to store data in AsyncStorage
  const STORAGE_KEY = 'products';

  // Function to fetch products from AsyncStorage or fallback to ProductsData
  const fetchProducts = async () => {
    try {
      // Try fetching products from AsyncStorage
      const storedProducts = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedProducts) {
        // If products exist in AsyncStorage, parse and set them
        setProducts(JSON.parse(storedProducts));
      } else {
        // If not, fallback to ProductsData and store it in AsyncStorage
        setProducts(ProductsData);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ProductsData));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to update products in AsyncStorage when changes occur
  const updateProducts = async (updatedProducts) => {
    try {
      setProducts(updatedProducts); // Update the state
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
    } catch (error) {
      console.error('Error updating products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      {products.map((p) => (
        <ProductsCard key={p._id} p={p} navigation={navigation} />
      ))}
    </View>
  );
};

export default Products;
