import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import AppHeader from './components/Header';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <Provider store={store}>
          <AppHeader></AppHeader>
        </Provider>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
});

export default App;
