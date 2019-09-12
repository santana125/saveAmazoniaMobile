import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FeedContext} from '../context/FeedContext';

//class Feed extends React.Component {
//  constructor(props){
//    super(props);
//  }
  //  componentDidUpdate(){
  //    if(!this.context.isGood && !this.context.isBad) 
  //      this.setState({this.context.isGood: true})
  //  }
  //  
  // shouldComponentUpdate(newProps, newState) {
  //    console.log("Update: " + newState.this.context.isGood !== this.context.isGood || newState.this.context.isBad !== this.context.isBad);
  //    return newState.this.context.isGood !== this.context.isGood || newState.this.context.isBad !== this.context.isBad;
  //  }
  //
  
class Feed extends Component{
  static contextType = FeedContext;
  
  render(){
    const posts = [
    {
      photo: "./assets/photo.png",
      title: "my title",
      body: "Hyper ultra mega big body.",
      likes: 3,
      good: true,
      user: {
        name: "Lorem Ipson",
        username: "lorem",
        userId: 345,
      }
    },
    {
      photo: "./assets/photo.png",
      title: "my title",
      body: "Hyper ultra mega big body.",
      likes: 3,
      good: true,
      user: {
        name: "Lorem Ipson",
        username: "lorem",
        userId: 345,
      }
    }];
  const {isGood, isBad, toggleGood} = this.context;
  return (
      <ScrollView style={styles.container}>
        {isGood && isBad ? ( 
          <View>
            <Text style={styles.appTitle}>Showing Good and Bad</Text>
            {posts.map(post => (
              <Text style={styles.appTitle}>{post.title}</Text>
            ))}
          </View>
            )
        : isGood ? (
          <Text style={styles.appTitle}>Showing just Good</Text>
        ):(
            <Text style={styles.appTitle}>Showing just Bad</Text>
        )
        }
      </ScrollView>
  );
  }}
//}
const styles = StyleSheet.create({
  container:{
    alignSelf:'stretch',
    elevation: 4,
    flexDirection: 'row',
    minHeight: 60,
    backgroundColor: '#eceff4',
  },
  appTitle:{
    paddingStart: 15,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 'bold'
  },
  leafs: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 5,
  }
  
  });
export default Feed;
