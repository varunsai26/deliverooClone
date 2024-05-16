import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;
const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      ref={ref}
      backdropComponent={renderBackDrop}
      snapPoints={snapPoints}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.InactiveText}>PickUp</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeader}>Your Location</Text>
        <Link href={"/"} asChild/>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name='location-outline' size={20} color={Colors.medium}/>
            <Text style={{flex:1}}>Location</Text>
            <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
          </View>
        </TouchableOpacity>
        <Text style={styles.subHeader}>Arrival Time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name='stopwatch-outline' size={20} color={Colors.medium}/>
            <Text style={{flex:1}}>Location</Text>
            <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding:8,
    borderRadius: 32,
    paddingHorizontal:30

  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  toggleInactive: {
    padding:8,
    borderRadius: 32,
    paddingHorizontal:30
  },
  InactiveText: {
    color: Colors.primary,
    fontWeight: "700",
  },
  subHeader:{
    fontSize:16,
    fontWeight: "600",
    margin:16
  },
  item:{
    flexDirection: "row",
    gap:8,
    alignItems: "center",
    padding:16,
    borderColor:Colors.grey,
    borderWidth:1
  }
});
export default BottomSheet;
