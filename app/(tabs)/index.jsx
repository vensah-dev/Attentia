import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements';
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {Link} from 'expo-router'
import "../../global.css"
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from "../../constants/colors"
import {images} from "../../constants"
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-elements/dist/helpers';

export default function HomeScreen(){
  const navigation = useNavigation(); 
  return (
    <>
    <StatusBar style="light"/>
    <SafeAreaView style={{flex:1, backgroundColor: colors.primary}}>
      <View>
        <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false} >
          {/* header */}
          <View className="my-8 px-6">
            <View className="flex-1">
              <Avatar className="self-end"
                size={48}
                rounded
                overlayContainerStyle={{backgroundColor: colors.secondary}}
                source={images.pfp}
                onPress={() => navigation.navigate('profile')}
                activeOpacity={0.7}
              />

              <Text className="text-white100 font-plight text-h1">Scroll Title</Text>

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
    </SafeAreaView>
    </>
  )
}


