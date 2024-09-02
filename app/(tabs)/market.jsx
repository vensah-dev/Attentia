import { Text, View, ScrollView, Image, FlatList, TouchableOpacity, Modal } from 'react-native'
import { Avatar } from 'react-native-elements';
import React, { useState } from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {colors} from "../../constants/colors"
import {images} from "../../constants"
import {icons} from "../../constants"
import {Link, Stack, useRouter} from "expo-router"
import {HeaderWithProfile} from '../_layout';
import "../../global.css"



const cardPacks = [
  {
    name: "Common Pack",
    chances: {
      common: 0.8,
      uncommon: 0.1,
      rare: 0.08,
      epic: 0.019,
      legendary: 0.001,
    },
    image: images.commonPack,
    cost: 25,
  },
  {
    name: "Rare Pack",
    chances: {
      common: 0.5,
      uncommon: 0.2,
      rare: 0.25,
      epic: 0.04,
      legendary: 0.01,
    },
    image: images.rarePack,
    cost: 100,
  },
  {
    name: "Legendary Pack",
    chances: {
      common: 0.05,
      uncommon: 0.1,
      rare: 0.6,
      epic: 0.15,
      legendary: 0.1,
    },
    image: images.legendaryPack,
    cost: 500,
  },
];

export function CardPackItem({cardPack}){
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  return (

    <View className="bg-secondary h-auto rounded-[8px] mt-6 mx-6 flex-col">

      <View className="flex-row justify-between items-center">
        <Image source={cardPack.image} className="h-[128px] w-[90px] ml-4 mt-4 self-center"/>
        
        <View className="flex-col w-[200px] pr-4 self-start mt-4">
          <Text className="text-h5 text-white90 font-pmedium text-right pb-4">{cardPack.name}</Text>

          <View className="flex-col ">

            <View className="flex-row justify-between items-center ">
              <Text className="text-sm text-white75 font-pregular">Common</Text>
              <Text className="text-sm text-white75 font-pregular">{(cardPack.chances.common*100).toString()+"%"}</Text>
            </View>

            <View className="flex-row justify-between items-center ">
              <Text className="text-sm text-white75 font-pregular">Uncommon</Text>
              <Text className="text-sm text-white75 font-pregular">{(cardPack.chances.uncommon*100).toString()+"%"}</Text>
            </View>

            <View className="flex-row justify-between items-center ">
              <Text className="text-sm text-white75 font-pregular">Rare</Text>
              <Text className="text-sm text-white75 font-pregular">{(cardPack.chances.rare*100).toString()+"%"}</Text>
            </View>

            <View className="flex-row justify-between items-center ">
              <Text className="text-sm text-white75 font-pregular">Epic</Text>
              <Text className="text-sm text-white75 font-pregular">{(cardPack.chances.epic*100).toString()+"%"}</Text>
            </View>

            <View className="flex-row justify-between items-center ">
              <Text className="text-sm text-white75 font-pregular">Legendary</Text>
              <Text className="text-sm text-white75 font-pregular">{(cardPack.chances.legendary*100).toString()+"%"}</Text>
            </View>

          </View>

        </View>

      </View>

      <Modal visible={purchaseOpen} animationType='fade' transparent>
        <View className="backdrop-blur-md flex-1 items-center justify-center bg-primary bg-opacity-90">

          <TouchableOpacity onPress={() => setPurchaseOpen(false)}>
            <Image source={cardPack.image} className="h-[384px] w-[270px] self-center"/>
          </TouchableOpacity>

          <View className="flex-row ">
            <TouchableOpacity onPress={() => setPurchaseOpen(false)} className="rounded-[8px] items-center justify-center mt-16">
              <Text className="text-h6 text-white75 font-pmedium px-4 py-2">Exit</Text>
            </TouchableOpacity>

          </View>



        </View>
      </Modal>

      <TouchableOpacity onPress={() => setPurchaseOpen(true)} className=' h-[40px] m-[16px] bg-tertiary flex-row items-center justify-center rounded-[8px]'>

        <Image source={icons.credits} className="h-4 w-4 mr-2"/>
        <Text className="text-h6 text-white75 font-pmedium">{cardPack.cost}</Text>

      </TouchableOpacity> 

    </View>

  )
}


export default function MarketScreen(){
  const router = useRouter();

  return (
    <>
    <StatusBar style="light"/>

    <ScrollView className="bg-primary h-full">
      {/* header */}
      <HeaderWithProfile title={"Market"}/>

      <View className="bg-secondary h-[96px] w-full flex-row justify-between items-center px-6">

        <View className="flex-row justify-between items-center">
          <Avatar
            size={64}
            rounded
            backgroundColor={colors.white100}
            overlayContainerStyle={{backgroundColor: colors.white100}}
            source={images.profile}
          />

          <Text className="text-white75 font-pmedium text-h5 pl-6">UserName</Text>
        </View>

        <View className="flex-col h-[64px] justify-between">
          
          <View className="flex-row gap-2">
            <Image source={icons.credits} className="w-[24px] h-[24px]" resizeMode='contain'/>
            <Text className="text-h6 text-white75 font-plight">999999</Text>
          </View>

          <View className="flex-row gap-2">
            <Image source={icons.XP} className="w-[24px] h-[24px]" resizeMode='contain'/>
            <Text className="text-h6 text-white75 font-plight">999999</Text>
          </View>        
        
        </View>

      </View>

      <FlatList
        data={cardPacks}
        renderItem={({item}) => (<CardPackItem cardPack={item}/>)}
        keyExtractor={item => cardPacks.findIndex((temp) => temp["name"] === item.name)}
        className="bg-primary"

        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        ListHeaderComponent={<Text className="text-white90 font-pregular text-h4 pt-8 pl-6">Card Packs</Text>}
      />

    </ScrollView>
    </>
  )
}
