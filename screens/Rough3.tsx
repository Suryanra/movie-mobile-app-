import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Rough4 from "./Rough4";

const Rough3 = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
const [dataToShown,setDataToShown]=useState("content 1");
  // variables
  const snapPoints = useMemo(() => ["25%", "50%","90%"], []);

  // callbacks
  const handlePresentModalPress = useCallback((props) => {
    bottomSheetModalRef.current?.present();
    setDataToShown(props)
    console.log("hello",props)
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          //     onPress={handlePresentModalPress}
          onPress={() => {
            handlePresentModalPress("hello1");
          }}
          title="Present Modal"
          color="black"
        />
        <Button
          //     onPress={handlePresentModalPress}
          onPress={() => {
            handlePresentModalPress("hello2");
          }}
          title="Present Modal"
          color="black"
        />
        <Rough4 bottomsheetHandle={handlePresentModalPress}></Rough4>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetView style={styles.contentContainer}>
            <Text>{dataToShown}</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
borderRightColor:"red",
    padding: 24,
    justifyContent: "center",
    backgroundColor: "green",
  },
  contentContainer: {
//     flex: 1,
    alignItems: "center",
    backgroundColor:"yellow"
  },
});

export default Rough3;
