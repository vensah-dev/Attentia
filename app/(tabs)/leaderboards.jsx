import { Text, View, ScrollView, Image, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements';
import React from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {colors} from "../../constants/colors"
import {images} from "../../constants"
import {Link, Stack} from "expo-router"
import "../../global.css"
import { FlatList } from 'react-native';
import {FixedHeader} from './_layout';


const users = [
  {
    name: "Vensah",
    score: 1500,
  },
  {
    name: "Legally",
    score: 1200,
  },
  {
    name: "Vensah3",
    score: 1000,
  },
  {
    name: "Tu Jing Yang",
    score: 840,
  },
  {
    name: "mini Kit Kat",
    score: 730,
  },
  {
    name: "mini Kit Kat",
    score: 720,
  },
  {
    name: "JY 16 mini",
    score: 650,
  },
  {
    name: "Kit Min",
    score: 600,
  },
  {
    name: "Loser(Kit Min)",
    score: 550,
  },
  {
    name: "Vensah",
    score: 1600,
  },
  {
    name: "Legally",
    score: 1300,
  },
  {
    name: "Vensah3",
    score: 1100,
  },
  {
    name: "Tu Jing Yang",
    score: 900,
  },
  {
    name: "mini Kit Kat",
    score: 810,
  },
  {
    name: "mini Kit Kat",
    score: 750,
  },
  {
    name: "JY 16 mini",
    score: 760,
  },
  {
    name: "Kit Min",
    score: 950,
  },
  {
    name: "Loser(Kit Min)",
    score: 660,
  },
];

const LeaderboardItem = ({user, index}) => (
  <View key={index} className={`${index%2==0 ? "bg-tertiary":"bg-secondary"} h-[56px] justify-center w-full`}>
    <View className="flex-row justify-between items-center mx-6">

      <View className="flex-row justify-between items-center gap-[24px]">
        <Text className="w-[24px] font-pbold text-h5 text-white100">{index+1}</Text>

        <Avatar
          size={40}
          rounded
          title={user.name[0].toUpperCase()}
          overlayContainerStyle={{backgroundColor: colors.accentPrimary}}
          titleStyle={{fontSize: 24, fontWeight: "light"}}
        />

        <Text className="text-white100 font-plight text-h5">{user.name}</Text>
      </View>

      <View className={`bg-white15 rounded-[567px] h-[24] w-[64px] flex-row justify-center items-center`}>
        <Text className="text-white100 opacity-75 font-plight text-h6">{user.score}</Text>
      </View>

    </View>
  </View>

);

export default function LeaderboardsScreen(){

  return (
    <>
      <FixedHeader title={"Leaderboards"}/>
      
      <FlatList
        data={users.sort((a, b) => (a.score > b.score ? -1 : 1))}
        renderItem={({item}) => <LeaderboardItem user={item} index={users.findIndex((temp) => temp["score"] === item.score)} />}
        keyExtractor={item => users.findIndex((temp) => temp["score"] === item.score)}
        showsVerticalScrollIndicator={false}
        className="bg-primary"
      />
    </>
  )
}
