import React, {Fragment} from 'react';
import {
  Image,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {withNavigation} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'

import logo from '../../assets/logo.png';
import CustomButton from '../../components/common/CustomButton'

import api from '../../services/api'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: null,
      password: null,
      loading: false,
    }
  }
  login = async () => {
    const {username, password} = this.state;
    
    try {
      this.setState({loading: true})
      const response = await api.post('/login', {username, password})
      const {token} = response.data;
      await AsyncStorage.setItem('@UserToken', token);
      this.props.navigation.navigate('Main');
    } catch(error){
      Alert.alert('Ocorreu um problema.', error.response.data.message)
    }
    this.setState({loading:false});
  }

  render (){
  return (
    <ScrollView style={styles.container}>
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.appName}>Save Amazônia</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          returnKeyType='next'
          autoCorrect={false}
          autoCapitalize="none"
          textContentType='username'
          onChangeText={text => this.setState({username: text})}
          onSubmitEditing={() => this.refs.passEntry.focus()}
          placeholder='Insira Username...'/>
          <TextInput
            style={styles.input}
            type='password'
            ref='passEntry'
            placeholder="Insira senha..."
            onChangeText={text => this.setState({password: text})}
            onSubmitEditing={this.login}
            />
              <CustomButton style={styles.btn} onPress={this.login} title='LOGIN' activity={this.state.loading}/>
                <CustomButton style={styles.btn} title='VOLTAR' onPress={() => this.props.navigation.navigate('Welcome')}/>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

}

const styles = StyleSheet.create({
  container:{
    flex:1,
		backgroundColor: '#eceff4',
    alignSelf:'stretch',
  },
  content: {
    alignItems:'center',
    paddingHorizontal: 32,
    alignSelf:'stretch'
  },
  logo: {
    width: 192,
    height: 192,
  },
  header:{
    paddingTop: 30,
    alignItems: 'center',
    paddingHorizontal: 40,
    alignSelf:'stretch'
  },
  appName: {
    color: '#2E3440',
    fontSize: 38,
    fontFamily: 'serif',
    fontWeight: '400',
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    textShadowColor: '#BEBEC2',
    marginBottom: 30,
  },
  btn: {
      marginTop: 20,
      marginBottom: 5,
  },
  input: {
    borderRadius: 18,
    paddingStart: 10,
    backgroundColor: '#D8DEE9',
    marginVertical: 4,
    width: 212,
    height: 36,

  }
});

export default withNavigation(Login);
