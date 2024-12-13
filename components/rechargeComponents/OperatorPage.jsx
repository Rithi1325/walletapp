import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Modal,
  Animated,
} from 'react-native';
import icons from '../../constant/images'; // Adjust the path to your `images.js`
import images from '../../constant/images';

const operators = [
  { id: '1', name: 'Airtel', image: images.Airtel },
  { id: '2', name: 'BSNL', image: icons.bsnl },
  { id: '3', name: 'Jio', image: icons.jio },
  { id: '4', name: 'Vi', image: icons.vi },
];

const OperatorPage = ({ onSelectProvider, visible }) => {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const slideAnim = new Animated.Value(300); // Start from below the screen

  useEffect(() => {
    if (visible) {
      // Animate the modal to slide up when visible
      Animated.spring(slideAnim, {
        toValue: 0, // Move to its normal position (covering half of the screen)
        useNativeDriver: true,
      }).start();
    } else {
      // Reset the animation when the modal is not visible
      Animated.spring(slideAnim, {
        toValue: 300, // Keep it below the screen
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleOperatorSelect = (operator) => {
    setSelectedOperator(operator);
    onSelectProvider(operator); // Notify parent with the selected provider
  };

  const renderOperator = ({ item }) => (
    <TouchableOpacity
      style={[styles.operatorItem, selectedOperator === item.name && styles.selectedOperator]}
      onPress={() => handleOperatorSelect(item.name)}
    >
      <Image source={item.image} style={styles.operatorImage} />
      <Text style={styles.operatorText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={() => {}}
    >
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}
        >
          <Text style={styles.modalHeaderText}>Choose an Operator</Text>
          <FlatList
            data={operators}
            keyExtractor={(item) => item.id}
            renderItem={renderOperator}
            contentContainerStyle={styles.listContainer}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken background to highlight modal
    justifyContent: 'flex-end', // Align the modal at the bottom
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '50%', // Limit the height to half the screen
    maxHeight: '50%', // Ensure the modal covers half the screen
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  operatorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOperator: {
    borderColor: '#007bff',
  },
  operatorImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  operatorText: {
    fontSize: 16,
  },
});

export default OperatorPage;
