// components/CategoryList.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../../constant/images';

const CategoryList = () => {
  const categories = [
    { name: 'Phones', image: images.phones },
    { name: 'Consoles', image: images.consoles },
    { name: 'Laptops', image: images.laptops },
    { name: 'Cameras', image: images.cameras },
    { name: 'Audio', image: images.audio },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem} activeOpacity={0.7}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#15133C",
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Changed to "space-between" for better distribution
    marginTop: 10,
  },
  categoryItem: {
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#fff', // White background for the circular container
    borderRadius: 35, // Adjusted to make the container large enough for the image
    padding: 16, // More padding for better visual balance
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  categoryImage: {
    width: 40, // Increased image size for better visibility
    height: 40, // Increased image size for better visibility
    borderRadius: 20, // Ensure the image is circular
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#15133C', // Added color for contrast
  },
});

export default CategoryList;
