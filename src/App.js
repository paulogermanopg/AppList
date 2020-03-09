import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, Modal } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: 'black',
  }
});
