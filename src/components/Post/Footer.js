import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconGroup}>
          <ADIcon name="hearto" size={25} color={'#545454'} />
          <Fontisto name="comment" size={23} color={'#545454'} />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={'#545454'}
          />
        </View>
        <FAIcon name="bookmark-o" size={25} color={'#545454'} />
      </View>
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  iconGroup: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
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
