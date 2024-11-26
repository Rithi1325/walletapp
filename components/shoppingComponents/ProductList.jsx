// /components/ProductList.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductList = ({ data }) => {
  return (
    <View>
      {data.map((item) => (
        <TouchableOpacity key={item.id} style={styles.productItem}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text> {/* Make sure the product name is wrapped in a Text component */}
            <Text style={styles.productDescription}>{item.description}</Text> {/* Make sure the description is wrapped in a Text component */}
            <Text style={styles.productPrice}>{item.price}</Text> {/* Make sure the price is wrapped in a Text component */}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ProductList;
