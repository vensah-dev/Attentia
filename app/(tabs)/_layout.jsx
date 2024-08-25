import { View, Text, Image, StatusBar } from 'react-native'
import { Tabs} from 'expo-router'
import React from 'react'
import {icons} from "../../constants"
import {colors} from "../../constants/colors"
import { SafeAreaView } from 'react-native-safe-area-context'


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
