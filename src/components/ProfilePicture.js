import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const HomeScreen = ({uri}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 86,
    width: 86,
    borderRadius: 40,
    margin: 10,
    borderWidth: 3,
    borderColor: '#ae22e0',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
});

export default HomeScreen;
