import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';

const HangMan = (props) => {
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
    return (<View><Text>HangMan</Text></View>);
  };
  
  const styles = StyleSheet.create({
    
  });
  
  export default HangMan;
  