import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from './common/CustomButton';
import {FeedContext} from '../context/FeedContext';

class AppFooter extends Component {
  static contextType = FeedContext;

  render() {
    const {isGood, isBad, toggleGood, toggleBad} = this.context;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.leafs}
          onPress={() => Alert.alert('assdasd', 'dasdasd')}>
          <Icon color="#aff" size={32} name="md-leaf" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.leafs}>
          <Icon color="#aaa" size={32} name="md-leaf" />
        </TouchableOpacity>
        <CustomButton
          text="VOLTAR"
          onPress={() => Alert.alert('assdasd', 'dasdasd')}
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
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 48,
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
  inputContainer: {
    backgroundColor: '#d8dee9',
    borderRadius: 16,
    paddingStart: 4,
    height: 38,
    minWidth: 160,
    maxWidth: 300,
  },
  picIcon: {
    marginHorizontal: 10,
  },
});
export default AppFooter;
