import React from 'react';
import {View, Text} from 'react-native';

import ProfilePicture from '../components/ProfilePicture';

const HomeScreen = () => {
  return (
    <View>
      <Text>Text</Text>
      <ProfilePicture uri="https://reactnative.dev/img/tiny_logo.png" />
      <ProfilePicture uri="https://reactnative.dev/img/tiny_logo.png" />
      <ProfilePicture uri="https://reactnative.dev/img/tiny_logo.png" />
      <ProfilePicture uri="https://reactnative.dev/img/tiny_logo.png" />
      <ProfilePicture uri="https://reactnative.dev/img/tiny_logo.png" />
    </View>
  );
};

export default HomeScreen;
