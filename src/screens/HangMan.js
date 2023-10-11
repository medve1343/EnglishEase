import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, Touchable} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { generate, count } from "random-words";
import { set } from "react-native-reanimated";

const HangMan = (props) => {
  const [attempt, setAttempt] = useState(8);
  const subOne = () => {
    setIsPressed(true);
    setAttempt(attempt => attempt - 1);
  };
  const wordToGuess = generate();
  const [isPressed , setIsPressed] = useState(false);
  /*
    Lock Screeen Feature
    TO DO: MOVE IT UNDER HOOKS WHEN YOU CAN!!!
  */
  // const [orientation, setOrientation] = useState(1);
  // useEffect(() => {
  //   lockOrientation();
  // }, []);
  // const lockOrientation = async () => {
  //   await ScreenOrientation.lockAsync(
  //     ScreenOrientation.OrientationLock.DEFAULT
  //   );
  // const o = await ScreenOrientation.getOrientationAsync();
  //   setOrientation(o);
  // };
  return (
    <View>
      <View>
        <Image style={styles.tree} source={require('../../assets/hangmantree.webp')}/>
        { attempt <= 7 && (<Image style={styles.head} source={require('../../assets/head.webp')}/>)}
        { attempt <= 6 && (<Image style={styles.body} source={require('../../assets/body.webp')}/>)}
        { attempt <= 5 && (<Image style={styles.leftArm} source={require('../../assets/arm.webp')}/>)}
        { attempt <= 4 && (<Image style={styles.rightArm} source={require('../../assets/arm.webp')}/>)}
        { attempt <= 3 && (<Image style={styles.leftLeg} source={require('../../assets/leg.webp')}/>)}
        { attempt <= 2 && (<Image style={styles.rightLeg} source={require('../../assets/leg.webp')}/>)}
        { attempt <= 1 && (<Image style={styles.branch} source={require('../../assets/branch.webp')}/>)}
        { attempt <= 0 && (<Image style={styles.fire} source={require('../../assets/fire.webp')}/>)}

      </View>
      <View><Text>Current count: {attempt}</Text></View>
      <View><Text style={styles.theWord}>{wordToGuess}</Text></View>
      <View style={styles.listStyle}>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>A</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>B</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>C</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>D</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>E</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>F</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>G</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>H</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>I</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>J</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>K</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>L</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>M</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>N</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>O</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>P</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>Q</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>R</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>S</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>T</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>U</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>V</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>W</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>X</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>Y</Text></TouchableOpacity>
        <TouchableOpacity onPress={subOne}><Text style={styles.textStyle}>Z</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tree: {
    height: 420,
    width: 450,
  },
  head: {
    position: 'absolute',
    height:60,
    width: 110,
    top:43,
    left: 87,
  },
  body: {
    position: 'absolute',
    height:70,
    width: 110,
    top:115,
    left: 87,
  },
  leftArm: {
    position: 'absolute',
    height: 60,
    width: 23,
    top: 120,
    left: 55,
  },
  rightArm: {
    position: 'absolute',
    height: 60,
    width: 23,
    top: 120,
    left: 205,
  },
  leftLeg: {
    position: 'absolute',
    height: 50,
    width: 33,
    top: 195,
    left: 100,
  },
  rightLeg: {
    position: 'absolute',
    height: 50,
    width: 33,
    top: 195,
    left: 150,
  },
  
  textStyle: {
    fontSize:30,
    margin: 10,
    borderWidth: 2,
    width: 50,
    textAlign:'center',
  },
  listStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  theWord: {
    textAlign: 'center',
    fontSize: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  fire: {
    position: 'absolute',
    height:60,
    width: 60,
    top:255,
    left: 107,
  },
  branch: {
    position: 'absolute',
    height:60,
    width: 70,
    top:310,
    left: 107,
  }
});

export default HangMan;
