import React, {Fragment} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import FeedContextProvider from '../context/FeedContext';

import Feed from '../components/Feed';

//if (__DEV__) {
//  require('react-devtools');
//}

const UserPage = () => {
  return (
    <FeedContextProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.userImage}>
          <Text>USER</Text>
        </View>
        <Text style={styles.userName}>USERNAME</Text>
        <Text style={styles.cityName}>Cidade: CITY</Text>
        <Text style={styles.postsHeader}>Suas postagens:</Text>
        <Feed />
      </SafeAreaView>
    </FeedContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 336,
  },

  userImage: {
    elevation: 3,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#FAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 9,
  },
  cityName: {
    fontSize: 12,
    marginVertical: 4,
  },
  postsHeader: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 10,
  }
});

export default UserPage;
