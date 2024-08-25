import { View, Text, Image, StatusBar } from 'react-native'
import { Tabs, Link} from 'expo-router'
import { Avatar } from 'react-native-elements';
import React from 'react'
import {icons} from "../../constants"
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from "../../constants/colors"
import {images} from "../../constants";
import "../../global.css";



const TabIcon = ({icon, name, color, focused}) => {
  return(
    <View className="items-center justify-end gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-7 h-7"
      />

      <Text style={{color: color}} className="text-xs">
        {name}
      </Text>
    </View>
  )
}

export default function TabsScreen(){

  return (
    <>
    <StatusBar style="light"/>

    <SafeAreaView edges={['right', 'left', 'top']} style={{flex:1, backgroundColor: colors.primary}} >
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.white100,
          tabBarStyle:{
            backgroundColor: colors.primary,
            borderTopWidth: 1,
            borderTopColor: colors.secondary,
            paddingVertical: 4,
            minHeight: 83,

          },
          
        }}
      >

          <Tabs.Screen
            name = "index"
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.home}
                  name="Home"
                  color={color}
                  focused={focused}
                />
              ),
            }}
          />

          <Tabs.Screen
            name = "exercises"
            options={{
              title: "Exercises",
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.lightBulb}
                  name="Exercises"
                  color={color}
                  focused={focused}
                />
              ),
            }}
          />

          <Tabs.Screen
            name = "leaderboards"
            options={{
              title: "Leaderboards",
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.trophy}
                  name="Leaderboards"
                  color={color}
                  focused={focused}
                />
              ),
            }}
          />
          
          <Tabs.Screen
            name = "goals"
            options={{
              title: "Goals",
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.bullseye}
                  name="Goals"
                  color={color}
                  focused={focused}
                />
              ),
            }}
          />

      </Tabs>
    </SafeAreaView>
    </>
  )
}

export function FixedHeader({title}){
  return(
    <View className="py-8 px-6 bg-primary h-[152px]">
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


        <Text className="text-white100 font-plight text-h1">{title}</Text>

      </View> 
    </View>
  )
}
