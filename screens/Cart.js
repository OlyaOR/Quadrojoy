import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
    
export const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buy Goods</Text>
    </View>
  )
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700'
  }
})