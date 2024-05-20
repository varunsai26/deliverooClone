import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { restaurants } from "@/assets/data/home";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
      }}
    >
      {restaurants.map((restaurant, index) => (
        <Link href={"/details"} key={index} asChild>
          <TouchableOpacity>
            <View key={index} style={styles.categoryCard}>
              <Image source={restaurant.img} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{restaurant.name}</Text>
                <Text style={{ color: Colors.green }}>
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text style={{ color: Colors.medium }}>
                  {restaurant.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 250,
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
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 5,
  },
  categoryBox: {
    flex: 2,
    padding: 10,
  },
});
export default Restaurants;
