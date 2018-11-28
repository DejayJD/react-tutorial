import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card.component';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
        <Card header="Mr Cage's Mobile App" body="Major Keys To Success"/>
      </View>
    );
  }
}


