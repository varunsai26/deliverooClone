import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";

const LocationSearch = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 17.445318,
    longitude: 78.685257,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
        language: 'en',
      }}
    />
      <MapView
        showsUserLocation={true}
        showsCompass={true}
        style={styles.map}
        region={location}
      />
      <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",
    bottom:20,
    width:'100%'
  },
  button: {
    backgroundColor: Colors.primary,
    padding:16,
    margin:16,
    alignItems: "center",
    borderRadius:8
  },
  buttonText: {
    color:"#fff",
    fontWeight:'bold',
    fontSize:16
  },
});
export default LocationSearch;
