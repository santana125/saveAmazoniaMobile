import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FeedContextProvider from './context/FeedContext';

import AppHeader from './components/Header';
import Feed from './components/Feed';

if (__DEV__) {
  require('react-devtools');
}

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <FeedContextProvider>
          <AppHeader></AppHeader>
          <Feed></Feed>
        </FeedContextProvider>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
});

export default App;
