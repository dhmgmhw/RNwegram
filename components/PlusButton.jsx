import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function PlusButton({ plusF }) {
  return (
    <TouchableOpacity onPress={plusF} style={styles.counterBox}>
      <Text style={styles.counterText}>Plus</Text>
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
