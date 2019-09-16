import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class FeedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedIndex: '1',
      showingLike: false,
    };
  }
  turnOff = () => {
    setTimeout(() => this.setState({showingLike: false}), 900);
  }

  lastTap = null;
  handleLike = () => {
    const now = Date.now();
    const LIKE_DELAY = 300;

    if (this.lastTap && (now - this.lastTap) < LIKE_DELAY){
      this.setState({showingLike: true});
      this.turnOff();
      this.props.Item.liked = !this.props.Item.liked;
    } else {
      this.lastTap = now;
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.postHeader}>
          <View style={styles.profPic }>
           <Text style={{color: '#FFF', fontWeight: 'bold'}}>USER</Text>
          </View>
          <View style={styles.headerText}>
            <Text>NAME @username</Text>
            <Text>Cidade, ES 11/11/19</Text>
          </View>
        </View>
        <Text style={styles.postTitle}>{this.props.Item.title}</Text>
        {this.state.showingLike ? (
          <Icon
            style={styles.likedPlac}
            name="md-heart"
            size={128}
            color="#F56"
          />
        ) : null}
        <TouchableWithoutFeedback  onPressIn={this.handleLike}>
          <View style={styles.imagePlac}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>
              I'm a placeholder
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.postBody}>{this.props.Item.body}</Text>
        <View style={styles.likeView}>
          {this.props.Item.liked ? (
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
          <Text style={styles.likeText}>
            {this.props.Item.likes} pessoas curtiram esta publicação.
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
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 4,
  },
  headerText:{
    alignSelf: 'stretch',
    flex:1,
    alignContent: 'center',
    marginHorizontal: 5,
    marginBottom: 4,
  },

});
    
export default FeedItems;
