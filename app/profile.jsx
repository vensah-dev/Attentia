import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import "../global.css"
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from "../constants/colors"
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen(){
  const navigation = useNavigation(); 
  return (
    <>
    <StatusBar style="light"/>
    <SafeAreaView style={{flex:1, backgroundColor: colors.primary}}>
      <View className="flex-1 items-center justify-center max-h-full">
        <Text className="text-white100">Profile</Text>
        <TouchableOpacity onPress={navigation.navigate([-1])}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </>
  )
}
