import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Link} from 'expo-router'
import "../global.css"

export default function App(){
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Hello, world!</Text>
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