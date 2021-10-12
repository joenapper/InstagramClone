import React from 'react';
import {View} from 'react-native';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post = ({post}) => {
  return (
    <View>
      <Header uri={post.user.uri} name={post.user.name} />
      <Body uri={post.uri} />
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
