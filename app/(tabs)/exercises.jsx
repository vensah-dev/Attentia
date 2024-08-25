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
    image: images.squareBreathing,
    title: "Square Breathing",
    category: "Calming",

  },
  {
    image: images.squareBreathing,
    title: "Triangle Breathing",
    category: "Calming",

  },
  {
    image: images.squareBreathing,
    title: "Hexagonal Breathing",
    category: "Calming",

  },
  {
    image: images.squareBreathing,
    title: "Duo-Decohedron Breathing",
    category: "Calming",

  },

];

const Exercise = ({exercise}) => (
  <View key={exercise.title} className="w-208 h-143">
    <Image source={exercise.image} className="w-h-full" resizeMode='scale'/>
  </View>

);

export default function ExerciseScreen(){

  return (
    <>
      <FixedHeader title={"Exercises"}/>
      <FlatList
        data={exercises.sort((a, b) => (a.score > b.score ? -1 : 1))}
        renderItem={({item}) => <Exercise exercise={item} />}
        keyExtractor={item => exercises.findIndex((temp) => temp["title"] === item.title)}
        showsVerticalScrollIndicator={false}
        className="bg-primary"
      />
    </>
  )
}
