/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
function App(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <TextInput style={styles.input} placeholder="Enter your first name" />
      <TextInput style={styles.input} placeholder="Enter your password" />
      <TextInput style={styles.input} placeholder="Enter your email" />
      <TextInput style={styles.input} placeholder="Enter your phone" />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 60,
    paddingHorizontal: 24,
  },
  input: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
  },
});

export default App;
