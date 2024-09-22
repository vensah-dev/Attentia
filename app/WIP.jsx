import { View, Text, Button, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {Link, useRouter} from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from "../constants/colors"
import {BackButton, HeaderPlain} from './_layout';
import "../global.css";
import { images } from '@/constants'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileScreen({navigation}){
  const router = useRouter();
  const user = useSelector(state => state.user);
  return (
    <View className="bg-primary">
      <SafeAreaView edges={['right', 'left', 'top']} className="flex-1 bg-primary h-full w-full">

        <View className="bg-primary h-full items-center justify-center">

          <Text className="text-white100 text-h1 opacity m-8">Work in Progress</Text>


            <TouchableOpacity activeOpacity={0.7} className="px-4 py-2" onPress={() => router.back()}>
                <Text className="text-accentPrimary ">Go Back</Text>
            </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  )
}

