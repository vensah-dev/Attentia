import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const profile = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>profile</Text>
      <StatusBar style='auto'/>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: "#18161D",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#F2F2F2",
  },
})