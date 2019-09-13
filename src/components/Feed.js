import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {FeedContext} from '../context/FeedContext';

class Feed extends Component {
  static contextType = FeedContext;

  render() {
    const posts = [
      {
        photo: './assets/photo.png',
        title: 'my title for a good post',
        body: 'Hyper ultra mega big body.',
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
        title: 'my title for a bad post',
        body: 'Hyper ultra mega big body.',
        likes: 3,
        good: false,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
      {
        photo: './assets/photo.png',
        title: 'Another bad post',
        body: 'Hyper ultra mega big body.',
        likes: 3,
        good: false,
        user: {
          name: 'Lorem Ipson',
          username: 'lorem',
          userId: 345,
        },
      },
    ];

    const {isGood, isBad, toggleGood} = this.context;

    function filterGoodPost(value) {
      return value.good;
    }
    const goodPosts = posts.filter(filterGoodPost);

    function filterBadPost(value) {
      return !value.good;
    }
    const badPosts = posts.filter(filterBadPost);

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{alignSelf:'stretch'}}>
          {isGood && isBad ? (
            <View  style={styles.postView}>
              <Text style={{fontSize: 26}}>Showing Good and Bad</Text>
              {posts.map(post => (
                <View>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <View style={styles.imagePlac}>
                    <Text> I'm a placeholder</Text>
                  </View>
                  <Text style={styles.postTitle}>{post.body}</Text>
                  <View style={{flexDirection: 'row', marginHorizontal: 5}}>
                    <Icon style={styles.heartIcon} name="md-heart" size={26} color="#F55" />
                    <Text style={styles.postTitle}>{post.likes} pessoas curtiram esta publicação.</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : isGood ? (
            <View>
              <Text style={{fontSize: 26}}>Showing just Good</Text>
              {goodPosts.map(post => (
                <View>
                  <Text style={styles.postTitle}>{post.title}</Text>
                      <View style={styles.imagePlac}>
                        <Text> I'm a placeholder</Text>
                      </View>
                  <Text style={styles.postTitle}>{post.body}</Text>
                  <View style={{flexDirection: 'row', marginHorizontal: 5}}>
                    <Icon style={styles.heartIcon} name="md-heart" size={26} color="#F55" />
                    <Text style={styles.postTitle}>{post.likes} pessoas curtiram esta publicação.</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : (
                <View>
                  <Text style={styles.postTitle}>Showing just Bad</Text>
                  {badPosts.map(post => (
                    <View>
                      <Text style={styles.postTitle}>{post.title}</Text>
                      <View style={styles.imagePlac}>
                        <Text> I'm a placeholder</Text>
                      </View>
                      <Text style={styles.postTitle}>{post.body}</Text>
                      <View style={{flexDirection: 'row', marginHorizontal: 5}}>
                        <Icon style={styles.heartIcon} name="md-heart" size={26} color="#F55" />
                        <Text style={styles.postTitle}>{post.likes} pessoas curtiram esta publicação.</Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'stretch',
    backgroundColor: '#FAFAFA',
  },
  postTitle: {
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
  heartIcon: {
    marginHorizontal: 4,
  },
  imagePlac: {
    minHeight: 300,
    height: 300,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA',
  }
});
export default Feed;
