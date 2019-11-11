import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

class FeedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: props.item.liked || false,
      likes: props.item.likes || 0,
    };
    this.image = {uri: `${props.item.photo}`};
    this.profPic = {uri: `${props.item.User.profile_pic}`};
  }

  likePicture = async () => {
    const token = await AsyncStorage.getItem('@UserToken');
    if (this.state.liked === true) {
      ToastAndroid.show('Você já curtiu esta publicação', ToastAndroid.SHORT);
    } else {
      await api.post(
        '/like',
        {
          postId: this.props.item.id,
        },
        {
          headers: {Authorization: token},
        },
      );
      this.setState({liked: true, likes: this.state.likes + 1});
    }
  };

  lastTap = null;
  handleLike = () => {
    const now = Date.now();
    const LIKE_DELAY = 300;
    if (this.lastTap && now - this.lastTap < LIKE_DELAY) {
      this.likePicture();
      this.animateIcon();
    } else {
      this.lastTap = now;
    }
  };

  handleHeartPress = async () => {
    const token = await AsyncStorage.getItem('@UserToken');
    await api.post(
      '/like',
      {
        postId: this.props.item.id,
      },
      {
        headers: {Authorization: token},
      },
    );
    if (!this.state.liked)
      this.setState({liked: true, likes: this.state.likes + 1});
    else this.setState({liked: false, likes: this.state.likes - 1});
  };

  iconAnimationRef = ref => {
    this.largeAnimatedIcon = ref;
  };

  animateIcon = () => {
    this.largeAnimatedIcon.stopAnimation();
    this.largeAnimatedIcon
      .bounceIn()
      .then(() => this.largeAnimatedIcon.bounceOut());
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps;
  }

  render() {
    const {city, title, body, createdAt} = this.props.item;
    const {name} = this.props.item.User;
    const {liked, likes} = this.state;

    const unformatedDate = new Date(createdAt)
    const date = unformatedDate.toLocaleDateString('pt-Br')
    return (
      <View style={{flex: 1}}>
        <View style={styles.postHeader}>
          <Image source={this.profPic} style={styles.profilePic} />
          <View style={styles.headerText}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 6}}>
              {name}
            </Text>
            <Text>{city} - {date}</Text>
          </View>
        </View>
        <Text style={styles.postTitle}>{title}</Text>
        <AnimatedIcon
          ref={this.iconAnimationRef}
          style={styles.likedPlac}
          name="md-heart"
          size={128}
          color="#F56"
          duration={500}
          delay={200}
        />
        <TouchableWithoutFeedback onPressIn={this.handleLike}>
          <Image source={this.image} style={styles.imagePlac} />
        </TouchableWithoutFeedback>
        <Text style={styles.postBody}>{body}</Text>
        <View style={styles.likeView}>
          <TouchableOpacity onPress={this.handleHeartPress}>
            {liked ? (
              <Icon
                style={styles.heartIcon}
                name="md-heart"
                size={26}
                color="#F55"
              />
            ) : (
              <Icon
                style={styles.heartIcon}
                name="md-heart-empty"
                size={26}
                color="#F55"
              />
            )}
          </TouchableOpacity>
          <Text style={styles.likeText}>
            {likes} pessoas curtiram esta publicação.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#FAFAFA',
    paddingBottom: 120,
  },
  postTitle: {
    marginTop: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '400',
    paddingVertical: 10,
  },
  leafs: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  postView: {
    alignSelf: 'stretch',
  },
  postBody: {
    fontSize: 16,
    color: '#3b4252',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  heartIcon: {
    marginHorizontal: 4,
  },
  imagePlac: {
    height: 300,
    width: '100%',
  },
  likedPlac: {
    top: 210,
    right: 150,
    position: 'absolute',
    zIndex: 2,
    opacity: 0,
    borderRadius: 160,
  },
  profilePicContainer: {
    height: 64,
    width: 64,
    borderRadius: 32,
    marginTop: 6,
    marginLeft: 4,
  },
  profilePic: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  likeView: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 4,
  },
  likeText: {
    fontSize: 16,
  },
  reloadIcon: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  postHeader: {
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 4,
    marginTop: 15,
  },
  headerText: {
    alignSelf: 'stretch',
    flex: 1,
    alignContent: 'center',
    marginHorizontal: 5,
    marginBottom: 4,
  },
});

export default FeedItems;
