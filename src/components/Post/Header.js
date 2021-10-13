import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import ProfilePicture from '../ProfilePicture';

const Header = ({uri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ProfilePicture uri={uri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Icon name="dots-three-vertical" size={16} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: '#3c3c3c',
  },
  icon: {
    marginRight: 10,
  },
});

export default Header;
