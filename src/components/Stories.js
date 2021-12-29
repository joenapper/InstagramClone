import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import storiesData from '../data/stories';

import Story from './Story';

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      data={storiesData}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story id={item.user.id} uri={item.user.uri} name={item.user.name} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default Stories;
