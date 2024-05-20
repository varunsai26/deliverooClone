import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color={Colors.medium}
        />
        <TextInput
          style={styles.input}
          placeholder="Restaurants, groceries , dishes"
        />
      </View>
      <Link href={"/(modal)/filter"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);
interface CustomHeaderProps {
  onLayout: (height: number) => void;
}

const CustomHeader = (props: CustomHeaderProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const headerRef = useRef<SafeAreaView>(null);
  const openModal = () => {
    console.log("open modal");
    bottomSheetRef.current?.present();
  };
  useEffect(() => {
    
    if (headerRef.current) {
      headerRef.current.measure((x, y, width, height) => {
        console.log("header customi", height);
        props.onLayout(height);
      });
    }
  }, []);

  return (
    <SafeAreaView ref={headerRef} style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require("@/assets/images/bike.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleCtnr} onPress={openModal}>
          <Text style={styles.title}>Delivery . Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subTitle}>San Francisco, CA</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.proflieBtn}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleCtnr: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  proflieBtn: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    height: 50,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
});

export default CustomHeader;
