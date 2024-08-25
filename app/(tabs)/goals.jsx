import { Text, View, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements';
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {colors} from "../../constants/colors"
import {images} from "../../constants"
import {Link, Stack} from "expo-router"
import "../../global.css"

export default function GoalsScreen(){
  return (
    <View>
    <ScrollView className="bg-primary h-full">
      {/* header */}
      <View className="py-8 px-6 bg-primary">
        <View className="flex-1">
          <Link href="profile" className="self-end">
            <Avatar
              size={48}
              rounded
              overlayContainerStyle={{backgroundColor: colors.secondary}}
              source={images.pfp}
              activeOpacity={0.7}
            />
          </Link>


          <Text className="text-white100 font-plight text-h1">Goals</Text>

        </View> 
      </View>

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
    </View>
  )
}
