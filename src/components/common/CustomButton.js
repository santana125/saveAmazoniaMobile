import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class CustomButton extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <>
        <TouchableOpacity style={[styles.leafs, this.props.style]} onPress={this.props.onPress}>
          {this.props.activity ? (
              <ActivityIndicator size="small" color="black" />
              ) : 
              (
              <Text style={styles.btnText}>{this.props.title}</Text>
              )
          }
        </TouchableOpacity>
      </>
    );
  }
}
//}
const styles = StyleSheet.create({
  btnText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b4252',
  },
  leafs: {
    borderRadius: 22,
    elevation: 1,
    height: 36,
    width: 192,
    backgroundColor: '#d8dee9',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 5,
  },
});
export default CustomButton;
