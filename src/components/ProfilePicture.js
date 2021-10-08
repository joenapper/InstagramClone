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
    height: 76,
    width: 76,
    margin: 5,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ae22e0',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});

export default HomeScreen;
