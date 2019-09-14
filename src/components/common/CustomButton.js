import React, {Component} from 'react';
import {
  View,
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
      <View style={styles.container}>
        <TouchableOpacity style={styles.leafs} onPress={this.props.onPress}>
            <Text style={styles.btnText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
//}
const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    width: 128,
    height: 36,
    backgroundColor: '#d8dee9',
  },
  btnText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b4252',
  },
  leafs: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 5,
  },
});
export default CustomButton;
