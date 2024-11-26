import React, { useState, useMemo } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import images from '../../../constant/images'; // Ensure correct paths for images
import icons from '../../../constant/icons'; // Ensure correct paths for icons
import AddToCartButton from '../AddToCartButton';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'AirPods', price: 13200.0, rating: 4.9, image: images.AirPods },
    { id: 2, name: 'MacBook Air 13', price: 110000.0, rating: 5.0, image: images.laptop1 },
    { id: 3, name: 'Gaming Keyboard', price: 8999.0, rating: 4.7, image: images.gaming },
    { id: 4, name: 'iPhone 14 Pro', price: 99900.0, rating: 4.8, image: images.apple },
    { id: 5, name: 'Samsung Galaxy S22', price: 79900.0, rating: 4.6, image: images.samsung },
    { id: 6, name: 'Sony Headphones', price: 19999.0, rating: 4.8, image: images.sonyHeadphones },
    { id: 7, name: 'Nintendo Switch', price: 35000.0, rating: 4.9, image: images.nintendoSwitch },
    { id: 8, name: 'Pixel 18 Mobile', price: 79999.0, rating: 4.8, image: images.pixel8 },
  ];

  // Initialize state with product IDs
  const [addedToCart, setAddedToCart] = useState(() => {
    const initialState = {};
    products.forEach((product) => {
      initialState[product.id] = { heart: false, inCart: false };
    });
    return initialState;
  });

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = useMemo(() => (windowWidth - 48) / 2, [windowWidth]);

  const handleHeartPress = (id) => {
    setAddedToCart((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        heart: !prev[id]?.heart,
      },
    }));
  };

  const handleAddToCartPress = (id) => {
    setAddedToCart((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        inCart: !prev[id]?.inCart,
      },
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {products.map((product) => (
          <View key={product.id} style={[styles.productCard, { width: itemWidth }]}>
            <View style={styles.imageContainer}>
              <Image source={product.image} style={styles.image} resizeMode="cover" />
              <TouchableOpacity style={styles.heartIconContainer} onPress={() => handleHeartPress(product.id)}>
                <Image
                  source={addedToCart[product.id]?.heart ? icons.heartFilled : icons.heartOutline}
                  style={styles.heartIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>★</Text>
                <Text style={styles.ratingText}>{product.rating}</Text>
              </View>
              <Text style={styles.price}>₹{product.price.toFixed(0)}</Text>
              <AddToCartButton
                isInCart={addedToCart[product.id]?.inCart}
                onPress={() => handleAddToCartPress(product.id)}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    aspectRatio: 1,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  productInfo: {
    gap: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#fbbf24',
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#4b5563',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
});

export default ProductGrid;
