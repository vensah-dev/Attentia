import { Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-elements';
import React from 'react';
import { StatusBar,  } from 'expo-status-bar';
import {colors} from "../../constants/colors";
import {images} from "../../constants";
import {Link, Stack} from "expo-router";
import "../../global.css";
import { FlatList } from 'react-native';
import {FixedHeader} from './_layout';

const exercises = [
  {
    category:"Today's Exercises",
    values:[
      {
        image: images.squareBreathing,
        title: "Square Breathing",
    
      },
      {
        image: images.squareBreathing,
        title: "Duo-Decohedron Breathing",

      },
      {
        image: images.squareBreathing,
        title: "hyper Duo-Decohedron Breathing?",

      },
    ]
  },
  {
    category:"Calm",
    values:[
      {
        image: images.squareBreathing,
        title: "Square Breathing",
    
      },
      {
        image: images.squareBreathing,
        title: "Duo-Decohedron Breathing",

      },
      {
        image: images.squareBreathing,
        title: "hyper Duo-Decohedron Breathing?",

      },
    ]
  },
  {
    category:"Focus",
    values:[
      {
        image: images.mouseRun,
        title: "Mouse Run",
    
      },
      {
        image: images.flow,
        title: "Flow",
    
      },
    ]
  },
  {
    category:"Analysis",
    values:[
      {
        image: images.mouseRun,
        title: "Deep Reading",
    
      },
      {
        image: images.flow,
        title: "Tracing",
    
      },
    ]
  },

];

const Exercise = ({exercise, category}) => (
  <View className="gap-2 pr-4">
    <Image source={exercise.image} className="w-[144px] h-[99px] rounded-[8px] border-white5 border" resizeMode='scale'/>
    <View className="">
      <Text className="text-white100 font-plight w-[144px]">{exercise.title.toString()}</Text>
      <Text className="text-white75 font-plight w-[144px]">{category.toString()}</Text>
    </View>

  </View>

);

export default function ExerciseScreen(){

  return (
    <>

      <View className="flex-1">
        <FixedHeader title={"Exercises"}/>

        <FlatList
          data={exercises}
          renderItem={({ item: cat }) => (

            <View className="flex-1">
              <Text className="text-white100 font-pmedium text-h4 pb-4 pl-6">{cat.category.toString()}</Text>

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
          showsVerticalScrollIndicator={false}
          className="bg-primary"
        />
      </View>

    </>
  )
}
