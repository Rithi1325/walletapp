// ShoppingScreen.jsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/shoppingComponents/SearchBar.jsx';
import Banner from '../components/shoppingComponents/Banner.jsx';
import CategoryList from '../components/shoppingComponents/CategoryList.jsx';
import ProductList from '../components/shoppingComponents/data/products.jsx';
import AdSwiper from '../components/swiperComponents/AdSwiper.jsx';


const ShoppingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <Banner />
      <AdSwiper/>
      <CategoryList />
      <ProductList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EEE9',
  },
});

export default ShoppingScreen;
