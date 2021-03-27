import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ minusF }) {
  return (
    <TouchableOpacity onPress={minusF} style={styles.counterBox}>
      <Text style={styles.counterText}>Minus</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  counterBtn: {
    flexDirection: 'row',
  },
  counterBox: {
    height: 50,
    width: 70,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  counterText: {
    marginTop: 15,
    textAlign: 'center',
  },
});
