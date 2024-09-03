import { Text, View, ScrollView, Image, FlatList, TouchableOpacity, Modal } from 'react-native'
import { Avatar } from 'react-native-elements';
import React, { useState } from 'react'
import { StatusBar,  } from 'expo-status-bar'
import {colors} from "../../constants/colors"
import {images} from "../../constants"

import { commonPackImages } from '../../constants/images';
import { uncommonPackImages } from '../../constants/images';
import { rarePackImages } from '../../constants/images';
import { epicPackImages } from '../../constants/images';
import { legendaryPackImages } from '../../constants/images';

import {icons} from "../../constants"
import {Link, Stack, useRouter} from "expo-router"
import {HeaderWithProfile} from '../_layout';
import "../../global.css"

const cardPacks = [
  {
    name: "Common Pack",
    chances: {
      common: 0.6,
      uncommon: 0.3,
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
      common: 0,
      uncommon: 0.65,
      rare: 0.25,
      epic: 0.09,
      legendary: 0.01,
    },
    image: images.rarePack,
    cost: 100,
  },
  {
    name: "Legendary Pack",
    chances: {
      common: 0,
      uncommon: 0,
      rare: 0.65,
      epic: 0.3,
      legendary: 0.05,
    },
    image: images.legendaryPack,
    cost: 500,
  },
];



export function CardPackItem({cardPack}){
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [packOpen, setpackOpen] = useState(false);
  const [packImage, setpackImage] = useState(legendaryPackImages.xyz);


  const randomItemIndex = (chances) => {
    const generatedChance = Math.random();
    var generatedTier = "";
    var listOfChances = [];
  
    for (let x in chances) {
      if (chances[x] > 0) {
        listOfChances.push(parseFloat(chances[x]));
      }
    }
  
    // Sort the chances in ascending order
    listOfChances = listOfChances.sort((a, b) => a - b);
  
    // Calculate cumulative probabilities
    var cumulativeProbability = 0;
    for (let i = 0; i < listOfChances.length; i++) {
      cumulativeProbability += listOfChances[i];
      listOfChances[i] = cumulativeProbability;
    }

    console.log(listOfChances)
    console.log(generatedChance)

    // Find the tier based on the generated chance
    for (let j = 0; j < listOfChances.length; j++) {
      if (generatedChance < listOfChances[j]) {
        if(j == 0){
          var keys = Object.keys(legendaryPackImages);
          setpackImage(legendaryPackImages[keys[keys.length * Math.random() << 0]]);
        }
        else if(j == 1){
          var keys = Object.keys(epicPackImages);
          setpackImage(epicPackImages[keys[keys.length * Math.random() << 0]]);
        }
        else if(j == 2){
          var keys = Object.keys(rarePackImages);
          setpackImage(rarePackImages[keys[keys.length * Math.random() << 0]]);
        }
        else if(j == 3){
          var keys = Object.keys(uncommonPackImages);
          setpackImage(uncommonPackImages[keys[keys.length * Math.random() << 0]]);
        }
        else if(j == 4){
          var keys = Object.keys(commonPackImages);
          setpackImage(commonPackImages[keys[keys.length * Math.random() << 0]]);
        }

        break;
      }
    }  
  };

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

      <TouchableOpacity onPress={() => setPurchaseOpen(true)} className="m-[16px] bg-tertiary flex-row items-center justify-center rounded-[4px]" activeOpacity={0.7}>
        <Image source={icons.credits} className="h-4 w-4 mr-3"/>
        <Text className="text-h6 text-white75 font-pmedium my-2">{cardPack.cost}</Text>
      </TouchableOpacity> 

      {/* confirmation modal */}
      <Modal visible={purchaseOpen} animationType='fade' transparent>
        <TouchableOpacity activeOpacity={1} className="backdrop-blur-md flex-1 items-center justify-center bg-primary bg-opacity-90" onPress={() => setPurchaseOpen(false)}>

          <TouchableOpacity onPress={() => {setpackOpen(true); randomItemIndex(cardPack.chances); setPurchaseOpen(false);}} activeOpacity={0.8}>
            <Image source={cardPack.image} className="h-[384px] w-[270px] self-center"/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPurchaseOpen(false)} className="my-12" activeOpacity={0.7}>
              <Text className="text-white50 font-pmedium">Exit</Text>
          </TouchableOpacity> 

        </TouchableOpacity>
      </Modal>

      {/* opened up modal */}
      <Modal visible={packOpen} animationType='fade' transparent>
        <TouchableOpacity activeOpacity={1} className="backdrop-blur-md flex-1 items-center justify-center bg-primary bg-opacity-90" onPress={() => setpackOpen(false)}>

          <TouchableOpacity onPress={() => {setpackOpen(false)}} activeOpacity={0.8}>
            <Image source={packImage} className="h-[200px] w-[200px] self-center rounded-full border-2 border-white10"/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setpackOpen(false)} className="my-12" activeOpacity={0.7}>
              <Text className="text-white50 font-pmedium">continue</Text>
          </TouchableOpacity> 

        </TouchableOpacity>
      </Modal>

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

      <View className="bg-white5 h-[96px] w-full flex-row justify-between items-center px-6">

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
