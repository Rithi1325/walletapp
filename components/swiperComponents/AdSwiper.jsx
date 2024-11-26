import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import images from '../../constant/images.jsx';

const AdSwiper = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        autoplay={true} // Enables automatic scrolling
        autoplayTimeout={3} // Time interval in seconds between slides
        loop={true} // Enables infinite looping
      >
        <View style={styles.slide}>
          <Image source={images.sw1} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={images.sw2} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={images.sw3} style={styles.image} />
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EEE9',
    paddingVertical: 20, // Adds space above and below the Swiper
  },
  wrapper: {
    height: 200, // Adjust to create a smaller Swiper (rectangle-like)
  },
  slide: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE31A',
    borderRadius: 10, // Rounded corners for a card effect
    marginHorizontal: 10, // Adds space between the cards and edges
  },
  image: {
    width: '100%', // Adjust width as needed
    height: '100%', // Adjust height as needed
    borderRadius: 10, // Optional for rounded corners
  },
  pagination: {
    bottom: 10, // Adjust as needed
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
});

export default AdSwiper;
