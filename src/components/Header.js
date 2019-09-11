import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

//class AppHeader extends React.Component {
//  constructor(props){
//    super(props);
//  }
  //  componentDidUpdate(){
  //    if(!isGood && !isBad) 
  //      this.setState({isGood: true})
  //  }
  //  
  // shouldComponentUpdate(newProps, newState) {
  //    console.log("Update: " + newState.isGood !== isGood || newState.isBad !== isBad);
  //    return newState.isGood !== isGood || newState.isBad !== isBad;
  //  }
  //
  //  goodLeafPressed(){
  //    console.log("Cgood: " +isGood + "  Cbad: " + isBad);
  //    if(!isGood && !isBad) 
  //      var newLeafState = true
  //    else
  //      var newLeafState = !isBad; 
  //    this.setState({isGood: newLeafState})
  //  }
  
  const AppHeader = ({isGood, isBad}) => (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Save Amazônia</Text>
        <TouchableOpacity style={styles.leafs}> 
          <Icon color={isGood ? '#fff' : '#000'} size={32} name="md-leaf"></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leafs}>
          <Icon color={isBad ? '#fff' : '#000'} size={32} name="md-leaf" ></Icon>
        </TouchableOpacity>
        <TextInput 
          placeholder="Insira uma cidade...">
        </TextInput>
        {isGood ?
        <Text>good</Text>
        :
          <Text>Bad</Text>
        }
        <Icon color="#4c566a" size={26} name="ios-camera"></Icon>
      </View>
    
    ); 
//}
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
export default connect(state => ({ isGood: state.isGood, isBad: state.isBad }))(AppHeader);
