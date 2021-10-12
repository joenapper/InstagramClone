import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ProfilePicture from '../ProfilePicture';

const Header = ({uri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={uri} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: '#3c3c3c',
  },
});

export default Header;
