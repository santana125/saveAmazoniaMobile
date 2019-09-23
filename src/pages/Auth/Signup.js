import React, {Fragment} from 'react';
import {
  Image,
  Text,
  Picker,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {withNavigation} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import {Dropdown} from 'react-native-material-dropdown'

import logo from '../../assets/logo.png';
import CustomButton from '../../components/common/CustomButton'

import api from '../../services/api'
import axios from 'axios'

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: null,
      password: null,
      password2: null,
      name: null,
      city: null,
      email: null,
      cities: ['a', 'b'],
      loading: false,
    }
    this.getCities()
  }
  getCities = async () => {
    response = await axios.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios')
    var cities = response.data.map(city => city.nome)
    this.setState({cities})
  }

  cadastrar = async () => {
    const {username, password, password2, name, city, email} = this.state;
    
    try {
      this.setState({loading: true})
      const response = await api.post('/user', {username, password, password2, name, city, email})
      const token = response.data.message;
      await AsyncStorage.setItem('@UserToken', token);
      this.props.navigation.navigate('Main');
      Alert.alert('Sucesso', response.data.message)
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
          <Text style={styles.guide}>Nome:</Text>
          <TextInput
            style={styles.input}
            returnKeyType='next'
            autoCorrect={false}
            textContentType='name'
            onChangeText={text => this.setState({name: text})}
            placeholder='Insira seu nome...'/>
          <Text style={styles.guide}>Username:</Text>
          <TextInput
            style={styles.input}
            returnKeyType='next'
            autoCorrect={false}
            textContentType='username'
            onChangeText={text => this.setState({username: text})}
            placeholder='Insira um username...'/>
          <Text style={styles.guide}>Email:</Text>
          <TextInput
            style={styles.input}
            returnKeyType='next'
            autoCorrect={false}
            textContentType='emailAddress'
            onChangeText={text => this.setState({email: text})}
            placeholder='Insira um email...'/>
          <Text style={styles.guide}>Cidade:</Text>
          <View style={styles.input}>
            <Picker 
              selectedValue={this.state.city}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({city: itemValue})}
              mode='dropdown'
              style={styles.picker}>
              {
                this.state.cities.map(city => <Picker.Item label={city} value={city} key={city}/>)
              }
            </Picker>
          </View>

          <Text style={styles.guide}>Senha:</Text>
          <TextInput
            style={styles.input}
            type='password'
            ref='passEntry'
            secureTextEntry={true}
            placeholder="Insira senha..."
            onChangeText={text => this.setState({password: text})}
            onSubmitEditing={this.login}
            />
          <Text style={styles.guide}>Confirme sua senha:</Text>
          <TextInput
            style={styles.input}
            type='password'
            ref='passEntry'
            secureTextEntry={true}
            placeholder="Confirme a senha..."
            onChangeText={text => this.setState({password2: text})}
            onSubmitEditing={this.cadastrar}
            />
              <CustomButton style={styles.btn} onPress={this.cadastrar} title='CADASTRAR-SE' activity={this.state.loading}/>
              <CustomButton style={styles.btn} title='VOLTAR' onPress={this.props.navigation.navigate}/>
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
  },
  guide: {
    alignSelf:'flex-start',
    marginStart: 90
  },
  picker: {
    flex: 1,
    alignSelf:'stretch'
  }
});

export default withNavigation(Signup);
