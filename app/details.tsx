import { View, Text } from "react-native";
import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
const details = () => {
  return (
    <>
      <ParallaxScrollView backgroundColor={"red"} parallaxHeaderHeight={300} style={{ flex: 1 }}>
        <View style={{ height: 100 }}>
          <Text>DETAILS</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

export default details;
