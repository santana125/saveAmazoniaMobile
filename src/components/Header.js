import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FeedContext} from '../context/FeedContext';

//class AppHeader extends React.Component {
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
  
class AppHeader extends Component{
  static contextType = FeedContext;
  
  render(){
  const {isGood, isBad, toggleGood, toggleBad} = this.context;
  return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Save Amazônia</Text>
        <TouchableOpacity style={styles.leafs} onPress={toggleGood}> 
          <Icon color={isGood ? '#afa' : '#000'} size={32} name="md-leaf"></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leafs} onPress={toggleBad}>
          <Icon color={isBad ? '#faa' : '#000'} size={32} name="md-leaf" ></Icon>
        </TouchableOpacity>
        <TextInput 
          placeholder="Insira uma cidade...">
        </TextInput>
        <Icon color="#4c566a" size={26} name="ios-camera"></Icon>
      </View>
  );
  }}
//}
const styles = StyleSheet.create({
  container:{
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'space-between',
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
export default AppHeader;
