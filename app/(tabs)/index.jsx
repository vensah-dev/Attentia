import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Link} from 'expo-router'
import "../../global.css"

const home = () =>{
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl font-pregular text-white100">Hello, world!</Text>
      <StatusBar style='auto'/>

      <Link href="/home" className="text-accentSecondary font-pregular">Venkatesh is the best</Link>
    </View>
  )
}

export default home
