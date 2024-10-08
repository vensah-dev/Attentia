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
        <ScrollView className="bg-primary h-full" stickyHeaderIndices={[0]}>

          <BackButton router={router}/>
          <HeaderPlain title={"Profile"}/>


          <View className="flex-1 justify-start items-start w-full px-6 rounded-[8px] pt-8">

            <Image
              source={images.pfpImpStat} // Replace with your image URL
              style={{aspectRatio: 2 / 1}}
              resizeMode='contain'
              className="flex-1 w-full h-full rounded-[8px] border-white5 border-2"
            />

            <View className="flex-1 items-center absolute self-start ml-12 bottom-[10%]">
              <Avatar
                size={160}
                rounded
                backgroundColor={colors.white100}
                overlayContainerStyle={{backgroundColor: colors.white100}}
                source={images.profile}
                activeOpacity={0.7}
              />

              <Text className="text-white75 font-pmedium text-h6 pt-[8px]">{user.userName}</Text>
            </View>

            <View className="flex-1 items-center absolute self-end right-[14%] top-[50%]">
              <Text className="text-white100 font-pextrabold text-h1">30%</Text>
              <Text className="text-white100 font-pregular text-kitmin">Improvement in focus</Text>
            </View>

          </View>

          <Text className="text-white100 opacity-75 m-8">Work in Progress</Text>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

