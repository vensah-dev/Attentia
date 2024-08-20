import { View, Text, Image } from 'react-native'
import { Tabs,  Redirect } from 'expo-router'
import React from 'react'
import {icons, Colors} from "../../constants"
import {colors} from "../../constants/colors"


const TabIcon = ({icon, name, color, focused}) => {
  return(
    <View className="items-center justify-center">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />

      <Text className={`${focused ? 'font-pregular' : 'font-plight'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const _layout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.white100,

        }}
      >

        <Tabs.Screen
          name = "home"
          options={{
            title: "Home",
            headerShown: true,
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
            headerShown: true,
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
            headerShown: true,
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
            headerShown: true,
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

export default _layout
