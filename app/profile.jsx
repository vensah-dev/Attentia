import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {Link, useRouter} from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from "../constants/colors"
import {BackButton, HeaderPlain} from './(tabs)/_layout';
import "../global.css";


export default function ProfileScreen(){
  const router = useRouter();
  return (
    <View className="bg-primary">
      <StatusBar style="light"/>

      <SafeAreaView edges={['right', 'left', 'top']} className="flex-1 bg-primary h-full w-full">

        <ScrollView className="bg-primary h-full" stickyHeaderIndices={[0]}>
          <BackButton router={router}/>
          <HeaderPlain title={"Profile"}/>

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
      </SafeAreaView>

    </View>
  )
}
