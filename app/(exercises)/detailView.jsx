import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {colors} from "../../constants/colors"
import {images} from "../../constants"
import {Link, useRouter} from "expo-router"
import { HeaderPlain,  BackButton} from '../_layout';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import "../../global.css"

export default function ExerciseInfoScreen(){
  const router = useRouter();
  const exercise = useLocalSearchParams()
  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="bg-primary h-full w-full">
        <View className="h-full w-full" scrollEnabled={true}>

          <View className="flex-1 justify">
            <BackButton router={router}/>

            <ScrollView className="flex-1 w-full">

              <View className="bg-white5">
                <Image
                  source={exercise.image} // Replace with your image URL
                  style={{aspectRatio: 1.45 / 1}}
                  resizeMode='contain'
                  className=" flex-1 w-full h-full"
                  
                />

                <Text className="text-white100 font-pmedium text-h3 mx-6 mt-6 mb-1">{exercise.title}</Text>
                <Text className="text-white75 font-plight text-h5 mx-6 mb-4">{exercise.category}</Text>
              </View>


              <Text className="text-white75 font-pmedium text-h5 mx-6 mb-2 mt-8">Description</Text>
              <Text className="text-white75 font-plight mx-6">{exercise.description}</Text>

            </ScrollView>


            <TouchableOpacity onPress={() => router.navigate(exercise.pagePath)} className="active:opacity-70 bg-accentPrimary rounded-[8px] mx-6 mb-12 items-center justify-center">
              <Text className="py-3 text-white100 text-h6 font-pmedium">Start</Text>
            </TouchableOpacity>

          </View>

        </View>
      </SafeAreaView>

    </View>
  )
}