import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

const Body = ({uri}) => {
  return <Image source={{uri: uri}} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});

export default Body;
