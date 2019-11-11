import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {FeedContext} from '../context/FeedContext';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

import FeedItems from './FeedItems';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingLike: true,
      posts: [],
      totalPages: null,
      page: 1,
      isRefreshing: false,
    };
  }

  static contextType = FeedContext;

  componentDidMount() {
    this.getPosts();
  }
  loadFeed = async () => {
    const {page, posts, totalPages} = this.state;
    const token = await AsyncStorage.getItem('@UserToken');
    if (page >= totalPages) return;
    const newPosts = await api.get('/posts', {
      headers: {Authorization: token, page: page + 1},
    });
    this.setState({posts: [...posts, ...newPosts.data.posts], page: page + 1});
  };
  getPosts = async () => {
    const token = await AsyncStorage.getItem('@UserToken');
    const myPosts = await api.get('/posts', {headers: {Authorization: token}});
    console.log(myPosts.data);
    this.setState({
      posts: myPosts.data.posts,
      totalPages: myPosts.data.pages,
      page: 1,
    });
  };
  refreshPosts = () => {
    this.setState({isRefreshing: true, posts: []});
    this.getPosts().then(() => {
      this.setState({isRefreshing: false});
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps;
  }

  render() {
    const {isGood, isBad} = this.context;

    const filterGoodPost = value => value.isGood;

    const goodPosts = this.state.posts.filter(filterGoodPost);

    const filterBadPost = value => !value.isGood;

    const badPosts = this.state.posts.filter(filterBadPost);

    return (
      <View style={styles.container}>
        {isGood && isBad ? (
          <FlatList
            contentContainerStyle={{flexGrow: 0}}
            data={this.state.posts}
            onEndReached={this.loadFeed}
            onRefresh={this.refreshPosts}
            refreshing={this.state.isRefreshing}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => <FeedItems item={item} />}
          />
        ) : isGood ? (
          <FlatList
            contentContainerStyle={{flexGrow: 0}}
            data={goodPosts}
            onEndReached={this.loadFeed}
            onRefresh={this.refreshPosts}
            refreshing={this.state.isRefreshing}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => <FeedItems item={item} />}
          />
        ) : (
          <FlatList
            contentContainerStyle={{flexGrow: 0}}
            data={badPosts}
            onEndReached={this.loadFeed}
            onRefresh={this.refreshPosts}
            refreshing={this.state.isRefreshing}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => <FeedItems item={item} />}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignSelf: 'stretch',
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
    right: 150,
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
    backgroundColor: '#FC0',
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 4,
  },
  headerText: {
    backgroundColor: '#CF0',
    alignSelf: 'stretch',
    flex: 1,
    alignContent: 'center',
    marginHorizontal: 5,
    marginBottom: 4,
  },
});
export default Feed;
