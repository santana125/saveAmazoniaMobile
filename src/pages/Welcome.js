import React, {Fragment} from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';

import logo from '../assets/logo.png';

import CustomButton from '../components/common/CustomButton'

const Welcome = ({navigation}) => {
  return (
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.appName}>Save Amazônia</Text>
        <CustomButton style={styles.btn} onPress={()=>navigation.navigate('Login')} title='LOGIN'/>
          <Text style={styles.question}>Ainda não tem conta?</Text>
        <CustomButton onPress={()=>navigation.navigate('Signup')} title='CADASTRE-SE'/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    alignSelf: 'stretch',
		backgroundColor: '#eceff4',
  },
  logo: {
    marginVertical: 30,
    width: 256,
    height: 256,
  },
  appName: {
    color: '#2E3440',
    fontSize: 38,
    fontFamily: 'serif',
    fontWeight: '400',
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    textShadowColor: '#BEBEC2',
  },
  btn: {
    marginTop: 32,  
  },
  question: {
    marginTop: 30,
    marginBottom: 10,
    color: '#2E3440',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Welcome;
