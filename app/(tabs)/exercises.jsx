import { Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-elements';
import React from 'react';
import { StatusBar,  } from 'expo-status-bar';
import {colors} from "../../constants/colors";
import {images} from "../../constants";
import {Link, Stack} from "expo-router";
import { FlatList } from 'react-native';
import {HeaderWithProfile} from '../_layout';
import "../../global.css";
import "../(exercises)/deepReading"


const exercises = [
  {
    category:"Today's Exercises",
    values:[
      {
        image: images.squareBreathing,
        title: "Square Breathing",
        pagePath: "../(exercises)/squareBreathing",
    
      },
      {
        image: images.spotDiff,
        title: "Spot The Difference",
        pagePath: "../(exercises)/spotDiff",

      },
      {
        image: images.mouseRun,
        title: "Mouse Run",
        pagePath: "../(exercises)/mouseRun",

      },
    ]
  },
  {
    category:"Calm",
    values:[
      {
        image: images.squareBreathing,
        title: "Square Breathing",
        pagePath: "../(exercises)/squareBreathing",
      },
      {
        image: images.spotDiff,
        title: "Spot The Difference",
        pagePath: "../(exercises)/spotDiff",
      },
      {
        image: images.squareBreathing,
        title: "hyper Duo-Decohedron Breathing?",
        pagePath: "../(exercises)/squareBreathing",
      },
    ]
  },
  {
    category:"Focus",
    values:[
      {
        image: images.mouseRun,
        title: "Mouse Run",
        pagePath: "../(exercises)/mouseRun",
      },
      {
        image: images.flow,
        title: "Flow",
        pagePath: "../(exercises)/flow",
      },
    ]
  },
  {
    category:"Analysis",
    values:[
      {
        image: images.mouseRun,
        title: "Deep Reading",
        pagePath: "../(exercises)/deepReading",
      },
      {
        image: images.flow,
        title: "Tracing",
        pagePath: "../(exercises)/deepReading",
      },
    ]
  },

];

const Exercise = ({exercise, category}) => (
  <Link  href={{ pathname: "../(exercises)/_layout", params: { name: exercise.title, pagePath: exercise.pagePath} }}>
    <View className="gap-2 pr-6 pt-6">

      <Image source={exercise.image} className="w-[144px] h-[99px] rounded-[8px] border-white10 border" resizeMode='contain'/>

      <View>
        <Text className="text-white75 text-base font-plight w-[144px]">{exercise.title.toString()}</Text>
        <Text className="text-white50 text-base font-plight w-[144px]">{category.toString()}</Text>
      </View>

    </View>
  </Link>


);

export default function ExerciseScreen(){

  return (
    <>
        <StatusBar style="light"/>

        <View>      
          <FlatList
            data={exercises}
            renderItem={({ item: cat }) => (

              <View className="flex-1">
                <Text className="text-white90 font-pregular text-h4 pt-8 pl-6">{cat.category.toString()}</Text>

                <FlatList
                  data={cat.values}
                  renderItem={({item}) => <Exercise exercise={item} category={""} />}
                  keyExtractor={item => cat.values.findIndex((temp) => temp["title"] === item.title)}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="bg-primary pl-6"
                />
              </View>
              
            )}
            keyExtractor={(item, index) => index}
            className="bg-primary"

            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={(props) => { return <View className="w-full h-[1px] bg-white10 ml-6"/>}}
            ListHeaderComponent={<HeaderWithProfile title={"Exercises"} />}
          />
        </View>
    </>

  )
}
