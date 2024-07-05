import { Image, Text, StyleSheet, View, ViewComponent } from 'react-native';
import React from 'react';

const App = () => {
  // functionality is written here and state management

  return (
    <View style={styles.screen_wrapper}>
      <Text style={styles.text}>Arnolds Asphalt Race cars</Text>
      <Image style={ styles.Image
      }
        source={{
          uri: 'https://cdn.motor1.com/images/mgl/mrz1e/s2/coolest-cars-feature.webp',
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  Image: {
    width: 400,
    height:250,
    objectFit:'cover'
  }
});
export default App;
