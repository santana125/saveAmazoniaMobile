import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FeedContext} from '../context/FeedContext';

class AppHeader extends Component {
  static contextType = FeedContext;

  render() {
    const {isGood, isBad, toggleGood, toggleBad} = this.context;
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Save Amazônia</Text>
        <TouchableOpacity style={styles.leafs} onPress={toggleGood}>
          <Icon
            color={isGood ? '#9cc975' : '#adb9cf'}
            size={32}
            name="md-leaf"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.leafs} onPress={toggleBad}>
          <Icon
            color={isBad ? '#e95d6a' : '#adb9cf'}
            size={32}
            name="md-leaf"
          />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Insira uma cidade..." />
        </View>
        <Icon
          style={styles.picIcon}
          color="#4c566a"
          size={26}
          name="ios-camera"
        />
      </View>
    );
  }
}
//}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    flexDirection: 'row',
    minHeight: 60,
    backgroundColor: '#eceff4',
  },
  appTitle: {
    paddingStart: 15,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
  },
  leafs: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  input: {
    alignContent: 'stretch',
    alignSelf: 'flex-start',
    textAlignVertical: 'center',
    margin: 0,
    padding: 0,
  },
  inputContainer: {
    marginStart: 10,
    marginEnd: 6,
    flexDirection: 'row',
    paddingStart: 10,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#d8dee9',
    borderRadius: 18,
    paddingStart: 10,
    height: 34,
    minWidth: 160,
    maxWidth: 300,
  },
  picIcon: {
    justifyContent: 'space-around',
    alignContent: 'center',
    marginRight: 6,
  },
});
export default AppHeader;
