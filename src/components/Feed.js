import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {FeedContext} from '../context/FeedContext';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [ 
        {
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
        {
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
        {
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
        {
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
    ], 
    };
  }

  static contextType = FeedContext;
    loadFeed = () => {
      newData = [{
      
        photo: './assets/photo.png',
        title: 'Another bad post',
        body: 'For bright ambiance designs, it is used for base elements like plain text, the text editor caret and reserved syntax characters like curly- and square brackets.',
        likes: 3,
        good: false,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      }]
    console.log(this.state.posts);
      this.setState({posts: [...this.state.posts, ...newData]})
  }

  lastTap = null;
  handleLike = () => {
    const now = Date.now();
    const LIKE_DELAY = 300;

    if (this.lastTap && (now - this.lastTap) < LIKE_DELAY)
      Alert.alert("saas", "asdas");
    else
      this.lastTap = now;
    
  }

  render() {
    

    const {isGood, isBad} = this.context;

    function filterGoodPost(value) {
      return value.good;
    }
    
    const goodPosts = this.state.posts.filter(filterGoodPost);

    function filterBadPost(value) {
      return !value.good;
    }
    const badPosts = this.state.posts.filter(filterBadPost);

    function isCloseToBottom({layoutMeasurement, contentOffset, contentSize}){
      return layoutMeasurement.height + contentOffset.y >= contentSize.height - 120;
    }

    console.log(this.state.posts);
    return (
      <View style={styles.container}>
        {isGood && isBad ? (
          <View style={styles.postView}>
            <FlatList
              data={this.state.posts}
              onEndReached={this.loadFeed}
              renderItem={({item, index}) => ( 
                <View>
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <TouchableOpacity style={styles.imagePlac} onPressIn={this.handleLike}>
                    <Text> I'm a placeholder</Text>
                  </TouchableOpacity>
                  <Text style={styles.postBody}>{item.body}</Text>
                  <View style={styles.likeView}>
                    <Icon
                      style={styles.heartIcon}
                      name="md-heart"
                      size={26}
                      color="#F55"
                    />
                    <Text style={styles.likeText}>
                      {item.likes} pessoas curtiram esta publicação.
                    </Text>
                  </View>
                </View>)}
          />
      </View>
        ) : (
          <Text>asda</Text>
        )}
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
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA',
  },
  likeView:{
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 5
  },
  likeText: {
    fontSize:16,
  },
  reloadIcon: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 5
  }
});
export default Feed;
