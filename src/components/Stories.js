import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Story from './Story';

const data = [
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'John Doe',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Jane Doe',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'A Doe',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'B Doe',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'C Doe',
  },
];

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story uri={item.uri} name={item.name} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default Stories;
