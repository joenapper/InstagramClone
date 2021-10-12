import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = ({likesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likesCount}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likesCount: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
});

export default Footer;
