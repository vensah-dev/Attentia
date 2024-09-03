import { Text, View, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements';
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {colors} from "../../constants/colors"
import {images} from "../../constants"
import {Link, Stack} from "expo-router"
import {HeaderWithProfile} from '../_layout';
import "../../global.css"

export default function HomeScreen({navigation}){
  return (
    <>
      <StatusBar style="light"/>

      <ScrollView className="bg-primary h-full">
        {/* header */}
        <HeaderWithProfile title={"Home"}/>

        <View className="bg-tertiary">
          <Text className="text-white100 opacity-75 m-8">item 1</Text>
        </View>

        <View className="bg-secondary">
          <Text className="text-white100 opacity-75 m-8">item 2</Text>
        </View>

        <View className="bg-tertiary">
          <Text className="text-white100 opacity-75 m-8">item 3</Text>
        </View>

      </ScrollView>
    </>
  )
}


