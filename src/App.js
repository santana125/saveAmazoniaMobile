import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FeedContextProvider from './context/FeedContext';

import AppHeader from './components/Header';
import Feed from './components/Feed';

//if (__DEV__) {
//  require('react-devtools');
//}

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <FeedContextProvider>
          <AppHeader />
          <Feed />
        </FeedContextProvider>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    alignSelf:'stretch',
  }
});

export default App;
