import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { awsmobile } from './aws-exports';

Amplify.configure(awsmobile);

export default withAuthenticator(class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Amplify Authentication</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
