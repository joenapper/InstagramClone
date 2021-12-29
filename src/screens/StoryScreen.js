import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import storiesData from '../data/stories';

import ProfilePicture from '../components/ProfilePicture';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.id;

  useEffect(() => {
    const userStories = storiesData.find(
      storyData => storyData.user.id === userId,
    );

    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const navigateToPrevUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = e => {
    const x = e.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{uri: activeStory.uri}} style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.uri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.iconContainer && styles.cameraButton}>
              <Feather name="camera" size={30} color={'#fff'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="paper-plane-outline" size={35} color={'#fff'} />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  postedTime: {
    marginLeft: 10,
    color: '#808080',
    fontWeight: '700',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  iconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 6,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
});

export default StoryScreen;
