import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ProfilePicture from '../components/ProfilePicture';

const Story = ({uri, name}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story');
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <ProfilePicture uri={uri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
  },
});

export default Story;
