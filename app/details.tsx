import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { restaurant } from "@/assets/data/restaurant";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const details = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => {
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.roundButton}
        >
          <Ionicons
            name="share-outline"
            size={20}
            color={Colors.primary}
            style={{ marginLeft: 16 }}
          />
        </TouchableOpacity>;
      },
      headerRight: () => {
        <View style={styles.bar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.roundButton}
          >
            <Ionicons
              name="search-outline"
              size={20}
              color={Colors.primary}
              style={{ marginLeft: 16 }}
            />
          </TouchableOpacity>
        </View>;
      },
    });
  }, []);
  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#fff"}
        parallaxHeaderHeight={300}
        style={{ flex: 1 }}
        renderStickyHeader={() => {
          <View key="sticky-header" style={styles.stickySection}></View>;
        }}
        renderBackground={() => <Image source={restaurant.img} />}
      >
        <View style={{ height: 100 }}>
          <Text>DETAILS</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: "red",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
export default details;
