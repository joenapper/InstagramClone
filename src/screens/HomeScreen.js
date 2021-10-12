import React from 'react';
import {View} from 'react-native';

import Stories from '../components/Stories';
import Post from '../components/Post';

const post = {
  user: {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'John Doe',
  },
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  caption: 'A caption #instagram',
  likesCount: 1234,
  postedAt: '6 minutes ago',
};

const HomeScreen = () => {
  return (
    <View>
      <Stories />
      <Post post={post} />
    </View>
  );
};

export default HomeScreen;
