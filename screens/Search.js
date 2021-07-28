import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
  
export const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search of Goods</Text>
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