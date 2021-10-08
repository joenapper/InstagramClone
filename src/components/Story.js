import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ProfilePicture from '../components/ProfilePicture';

const Story = ({uri, name}) => {
  return (
    <View>
      <ProfilePicture uri={uri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
  },
});

export default Story;
