import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Link} from 'expo-router'

export default function App(){
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Hello, world!</Text>
      <StatusBar style='auto'/>

      <Link href="/profile" style={{color: 'blue'}}>Profile</Link>
    </View>
  )
}


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