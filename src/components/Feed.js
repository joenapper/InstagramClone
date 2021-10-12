import React from 'react';
import {FlatList} from 'react-native';

import Stories from './Stories';
import Post from './Post';

const data = [
  {
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
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
