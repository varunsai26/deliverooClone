import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { categories } from "@/assets/data/home";
import { ScrollView } from "react-native";
const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
      }}
    >
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryCard}>
          <Image source={category.img} />
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    borderRadius: 4,
    shadowOpacity: 0.05,
  },
  categoryText: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
});
export default Categories;
