import { Stack, useNavigation } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ header: () => <CustomHeader /> }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: "modal",
            headerTitle: "Filter",
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons
                  name="close-outline"
                  size={28}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
