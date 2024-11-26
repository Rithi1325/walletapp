import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PromotionBanner = () => {
  return (
    <View style={styles.promotionBanner}>
      <Text style={styles.promotionText}>
        Save 5% on all utility bills!{'\n'}Pay using our recommended payment
        methods
      </Text>
    </View>
  );
};

export default PromotionBanner;

const styles = StyleSheet.create({
    promotionBanner: {
        backgroundColor: '#15133C', // Gold background for promotion banner
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 12,
        marginTop: 16,
      },
      promotionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F1EEE9', // Dark gray text for promotion
      },
});
