import React from 'react';
import {FlatList} from 'react-native';

import Stories from './Stories';
import Post from './Post';

const data = [
  {
    id: '1',
    user: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'John Doe',
    },
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    caption: 'A caption #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '2',
    user: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Jane Doe',
    },
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    caption: 'Another caption #instagram',
    likesCount: 34,
    postedAt: '11 minutes ago',
  },
  {
    id: '3',
    user: {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'A Doe',
    },
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    caption: 'A caption #instagram',
    likesCount: 134,
    postedAt: '16 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
