import React from 'react';
import {FlatList} from 'react-native';

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
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story uri={item.uri} name={item.name} />}
    />
  );
};

export default Stories;
