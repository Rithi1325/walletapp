import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ProviderCard from '../../components/dthComponents/ProviderCard';
import images from '../../constant/images';
import SearchBar from '../../components/dthComponents/SearchBar';

const providers = [
  { id: '1', name: 'Dish Tv', image: images.Dishtv },
  { id: '2', name: 'Sun Direct', image: images.Sun },
  { id: '3', name: 'Tata Play', image: images.Tata },
  { id: '4', name: 'd2h', image: images.D2h },
  { id: '5', name: 'Dish Tv', image: images.Dishtv },
  { id: '6', name: 'Sun Direct', image: images.Sun },
  { id: '7', name: 'Tata Play', image: images.Tata },
  { id: '8', name: 'd2h', image: images.D2h },
  { id: '9', name: 'Dish Tv', image: images.Dishtv },
  { id: '10', name: 'Sun Direct', image: images.Sun },
  { id: '11', name: 'Tata Play', image: images.Tata },
  { id: '12', name: 'd2h', image: images.D2h },
];

const DTHRechargeScreen = () => {
  const handleProviderSelect = (provider) => {
    console.log(`Selected provider: ${provider.name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.providersGrid}>
        {providers.length === 0 ? (
          <Text style={styles.noResultsText}>No providers found.</Text>
        ) : (
          providers.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onSelect={handleProviderSelect}
            />
          ))
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EEE9',
    paddingTop: 16,
  },
  providersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 12,
  },
  noResultsText: {
    color: '#333333',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default DTHRechargeScreen;