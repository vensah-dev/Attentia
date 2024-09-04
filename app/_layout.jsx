import { View, Text, Image, TouchableOpacity } from 'react-native'
import {React, useEffect} from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Stack, Link } from 'expo-router';
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {colors} from "../constants/colors"
import {images} from "../constants";
import {icons} from "../constants"
import {Provider} from "react-redux"

import store from "../store"


SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function App(){

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(()=>{
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;
  
  return ( 
    <Provider store={store}>
    <>
      <StatusBar style="light"/>

      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)"/>
      </Stack>

    </>
    </Provider>

  )
}

export function HeaderWithProfile({title}){
  return(
    <View className="mt-8 mb-6 mx-6 bg-primary">
      <View>
        
        <Link href="profile" className="self-end">
          <Avatar
            size={40}
            rounded
            backgroundColor={colors.white100}
            overlayContainerStyle={{backgroundColor: colors.white100}}
            source={images.profile}
            activeOpacity={0.7}
          />
        </Link>

        <Text className="text-white100 font-psemibold text-h1 pb-2">{title}</Text>

      </View> 
    </View>
  )
}

export function HeaderPlain({title}){
  return(
    <View className="mx-6 mb-6 bg-primary">
        <Text className="text-white100 font-psemibold text-h1">{title}</Text>
    </View>
  )
}

export function BackButton({router}){
  return(
    <View className="pt-3 bg-primary">
        <TouchableOpacity activeOpacity={0.7} className="self-start px-4 py-2" onPress={() => router.back()}>
          <Image source={icons.leftArrow} resizeMode='contain' className="w-10 h-10" tintColor={colors.white75}/>
        </TouchableOpacity>
    </View>
  )
}
