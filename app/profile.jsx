import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {Link, useRouter} from "expo-router"
import "../global.css"
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from "../constants/colors"

export default function ProfileScreen(){
  const router = useRouter();
  return (
    <>
    <StatusBar style="light"/>

    <View className="flex-1 items-center justify-center max-h-full bg-primary">
        <Text className="text-white100">Profile</Text>

        <Button className="text-accentPrimary fill-accentPrimary" title="Go back" onPress={() => router.back()} />
    </View>
    </>
  )
}
