import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FeedContextProvider from '../context/FeedContext';

import AppHeader from '../components/Header';
import Feed from '../components/Feed';

//if (__DEV__) {
//  require('react-devtools');
//}

const MainPage = () => {
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
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default MainPage;
