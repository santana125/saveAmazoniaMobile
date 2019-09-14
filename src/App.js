import React, {Fragment} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import FeedContextProvider from './context/FeedContext';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Feed from './components/Feed';

if (__DEV__) {
  require('react-devtools');
}

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <FeedContextProvider>
          <View style={styles.header}>
            <AppHeader /> 
          </View>
          <View style={styles.feed}>
            <Feed/>
          </View>
          <KeyboardAvoidingView enabled style={styles.footer}>
          <AppFooter/>
        </KeyboardAvoidingView>
        </FeedContextProvider>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignSelf:'stretch',
    justifyContent:'space-between'
  },
  header:{
    alignSelf:'stretch',
  },
  feed:{
    flex:2,
  },
  footer:{
   alignSelf: 'stretch',
  }
});

export default App;
