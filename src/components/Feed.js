import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {FeedContext} from '../context/FeedContext';

import FeedItems from './FeedItems';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedIndex: '1',
      showingLike: true,
      posts: [ 
        {
        id:"0",
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        liked: true,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
        {
        id:'1',
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        liked: false,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
        {
        id:'2',
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        liked: false,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
        {
        id: '4',
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.',
        likes: 3,
        good: true,
        liked: true,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
    ], 
    };
  }
  
  lastId = 4
  static contextType = FeedContext;
    loadFeed = () => {
      newId = this.lastId +1;
      newData = [{
        id: newId.toString(),
        photo: './assets/photo.png',
        title: 'Another bad post',
        body: 'For bright ambiance designs, it is used for base elements like plain text, the text editor caret and reserved syntax characters like curly- and square brackets.',
        likes: 3,
        good: false,
        liked: true,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      }]
      this.lastId++
//      this.setState({posts: [...this.state.posts, ...newData]})
  }

  lastTap = null;
  handleLike = (item) => {
    const now = Date.now();
    const LIKE_DELAY = 300;

    if (this.lastTap && (now - this.lastTap) < LIKE_DELAY){
      console.log(item); 
      this.setState({likedIndex: '2'});
    }
    else
      this.lastTap = now;
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state.likedIndex !== nextState.likedIndex || this.context;
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

    return (
      <View style={styles.container}>
        {isGood && isBad ? (
          <View style={styles.postView}>
            <FlatList
              data={this.state.posts}
              onEndReached={this.loadFeed}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => <FeedItems Item={item} />}
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
    backgroundColor: '#3b4252',
  },
  likedPlac: {
    top: 210,
    right:150,
    position: 'absolute',
    zIndex: 1,
  },
  profPic: {
    height: 64,
    width: 64,
    borderRadius: 32,
    marginTop: 6,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b4252',
  },
  likeView:{
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 4,
  },
  likeText: {
    fontSize:16,
  },
  reloadIcon: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 5
  },
  postHeader:{
    backgroundColor: '#FC0',
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 4,
  },
  headerText:{
    backgroundColor: '#CF0',
    alignSelf: 'stretch',
    flex:1,
    alignContent: 'center',
    marginHorizontal: 5,
    marginBottom: 4,
  },

});
export default Feed;
