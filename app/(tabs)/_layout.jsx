import { View, Text, Image } from 'react-native'
import { Tabs} from 'expo-router'
import React from 'react'
import {icons} from "../../constants"
import {colors} from "../../constants/colors"


const TabIcon = ({icon, name, color, focused}) => {
  return(
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />

      <Text style={{color: color}} className="text-xs">
        {name}
      </Text>
    </View>
  )
}

export default function App(){

  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.white100,
          tabBarStyle:{
            backgroundColor: colors.primary,
            borderTopWidth: 1,
            borderTopColor: colors.secondary,
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
          name = "statistics"
          options={{
            title: "Statistics",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.stats}
                name="Statistics"
                color={color}
                focused={focused}
              />
            ),
          }}
        />

      </Tabs>
    </>
  )
}
