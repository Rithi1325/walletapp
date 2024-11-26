// SegmentedControl.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SegmentedControl = ({ selected, onSelect }) => (
  <View style={styles.segmentedControl}>
    <TouchableOpacity
      style={[styles.segment, selected === 'Prepaid' && styles.selectedSegment]}
      onPress={() => onSelect('Prepaid')}
    >
      <Text style={[styles.segmentText, selected === 'Prepaid' && styles.selectedText]}>Prepaid</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.segment, selected === 'Postpaid' && styles.selectedSegment]}
      onPress={() => onSelect('Postpaid')}
    >
      <Text style={[styles.segmentText, selected === 'Postpaid' && styles.selectedText]}>Postpaid</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#15133C',
    borderRadius: 25,
    padding: 4,
    marginBottom: 20,
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  selectedSegment: {
    backgroundColor: '#fff',
  },
  segmentText: {
    color: '#fff',
    fontWeight: '600',
  },
  selectedText: {
    color: '#000',
  },
});

export default SegmentedControl;
