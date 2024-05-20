import { Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Categories from "@/components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "@/components/Restaurants";
import Colors from "@/constants/Colors";

interface IndexProps {
  height: number;
}
const Page = (props:IndexProps) => {
  console.log("height: ",props.height);
  return (
    <SafeAreaView style={{...styles.container}}>
      <ScrollView contentContainerStyle={{paddingBottom:130}}>
        <Categories/>
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants/>
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants/>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container:{
    top:110,
    backgroundColor:Colors.lightGrey,
  },
  header:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:8,
    paddingHorizontal:16,
  }
})

export default Page;
