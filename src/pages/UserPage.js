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

const UserPage = () => {
  return (
      <SafeAreaView style={styles.container}>
        <FeedContextProvider>
          <AppHeader />
        </FeedContextProvider>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    alignSelf:'stretch',
  }
});

export default UserPage;
