import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {colors} from "../../constants/colors"
import {images} from "../../constants"
import {Link, useRouter} from "expo-router"
import { HeaderPlain,  BackButton} from '../_layout';
import { SafeAreaView } from 'react-native-safe-area-context'

import "../../global.css"

export function ExerciseInfoScreen(name, pagePath){
  const router = useRouter();
  return (
    <View className="bg-primary">
      <SafeAreaView edges={['right', 'left', 'top']} className="flex-1 bg-primary h-full w-full">
        <View className="bg-primary h-full" stickyHeaderIndices={[0]}>

          <BackButton router={router}/>
          <HeaderPlain title={name}/>

          <View className="bg-tertiary">
            <Text className="text-white100 opacity-75 m-8">item 1</Text>
          </View>

          <View className="bg-secondary">
            <Text className="text-white100 opacity-75 m-8">item 2</Text>
          </View>

          <View className="bg-tertiary">
            <Text className="text-white100 opacity-75 m-8">item 3</Text>
          </View>

        </View>
      </SafeAreaView>

    </View>
  )
}
