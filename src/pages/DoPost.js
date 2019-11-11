import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';

class DoPost extends React.Component {
  render() {
    return (
      <SafeAreaView forceInset={{bottom: 'never'}} style={styles.container}>
        <Text>Titulo:</Text>
        <TextInput
          style={styles.input}
          returnKeyType="next"
          onChangeText={text => this.setState({username: text})}
          onSubmitEditing={() => this.refs.passEntry.focus()}
          placeholder="Titulo..."
        />
        <Text>Corpo:</Text>
        <TextInput
          style={styles.bigInput}
          returnKeyType="next"
          multiline
          numberOfLines={9}
          onChangeText={text => this.setState({username: text})}
          onSubmitEditing={() => this.refs.passEntry.focus()}
          placeholder="Corpo..."
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },

  input: {
    alignSelf: 'stretch',
    borderRadius: 18,
    paddingStart: 10,
    backgroundColor: '#D8DEE9',
    marginVertical: 4,
    marginHorizontal: 20,
    height: 36,
  },
  bigInput: {
    alignSelf: 'stretch',
    borderRadius: 18,
    paddingStart: 10,
    backgroundColor: '#D8DEE9',
    marginVertical: 4,
    marginHorizontal: 20,
    height: 230,
    textAlignVertical: 'top'
  },
});

export default DoPost;
