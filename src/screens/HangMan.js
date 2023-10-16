import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, Touchable} from "react-native";
// import * as ScreenOrientation from "expo-screen-orientation";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { generate, count } from "random-words";

//Generate new random word
const wordToGuess = String(generate());
//Insert the word into a list
const list = Array.from({ length: wordToGuess.length }, () => "X");
//List of all attempts and source of heart
const heartImage = require('../../assets/heart.webp'); 
const heartList = Array.from({ length: 8 }, () => heartImage);
// Interactive buttons on the screen.
const buttons = [
  { letter: 'a', pressed: false },
  { letter: 'b', pressed: false },
  { letter: 'c', pressed: false },
  { letter: 'd', pressed: false },
  { letter: 'e', pressed: false },
  { letter: 'f', pressed: false },
  { letter: 'g', pressed: false },
  { letter: 'h', pressed: false },
  { letter: 'i', pressed: false },
  { letter: 'j', pressed: false },
  { letter: 'k', pressed: false },
  { letter: 'l', pressed: false },
  { letter: 'm', pressed: false },
  { letter: 'n', pressed: false },
  { letter: 'o', pressed: false },
  { letter: 'p', pressed: false },
  { letter: 'q', pressed: false },
  { letter: 'r', pressed: false },
  { letter: 's', pressed: false },
  { letter: 't', pressed: false },
  { letter: 'u', pressed: false },
  { letter: 'v', pressed: false },
  { letter: 'w', pressed: false },
  { letter: 'x', pressed: false },
  { letter: 'y', pressed: false },
  { letter: 'z', pressed: false },
];

const HangMan = (props) => {
  
  //useState functions
  const [imageList, setImageList] = useState(heartList);

  const [buttonStates, setButtonStates] = useState(buttons);

  const [playList, updateList] = useState(list);

  // Check if a letter exists in the list
  const doesLetterExist = (letterToCheck) => {
    const exists = wordToGuess.includes(letterToCheck);
    if (exists) {
      const newList = [...playList];
        for (let i = 0; i < wordToGuess.length; i++) { 
          if (wordToGuess[i] === letterToCheck) { newList[i] = letterToCheck; } }
      updateList(newList);
    }
    //Loose one life :(
    else { removeLastImage(); }
    return;
  }

  // Remove a heart after an attempt
  const removeLastImage = () => {
    if (imageList.length === 0) { return; } // If the list is empty, there's nothing to remove
    const updatedList = imageList.slice(0, -1); // Create a new list without the last image
    setImageList(updatedList);
  };

  // Handle press upong pushing
  const handlePress = (index , letter) => {
    if(!buttonStates[index].pressed) {
      const updatedButtonStates = [...buttonStates];
      updatedButtonStates[index].pressed = !buttonStates[index].pressed;
      setButtonStates(updatedButtonStates);
    }
    doesLetterExist(letter);

  };

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
        {/* Hangman Images */}
        <Image style={styles.tree} source={require('../../assets/hangmantree.webp')}/>
        { imageList.length <= 7 && (<Image style={styles.head} source={require('../../assets/head.webp')}/>)}
        { imageList.length <= 6 && (<Image style={styles.body} source={require('../../assets/body.webp')}/>)}
        { imageList.length <= 5 && (<Image style={styles.leftArm} source={require('../../assets/arm.webp')}/>)}
        { imageList.length <= 4 && (<Image style={styles.rightArm} source={require('../../assets/arm.webp')}/>)}
        { imageList.length <= 3 && (<Image style={styles.leftLeg} source={require('../../assets/leg.webp')}/>)}
        { imageList.length <= 2 && (<Image style={styles.rightLeg} source={require('../../assets/leg.webp')}/>)}
        { imageList.length <= 1 && (<Image style={styles.branch} source={require('../../assets/branch.webp')}/>)}
        { imageList.length <= 0 && (<Image style={styles.fire} source={require('../../assets/fire.webp')}/>)}

      </View>
      <View><Image style={styles.background} source={require('../../assets/sea-background.webp')}/></View>
      {/* Heart List */}
      <View style={styles.heartImage}>{imageList.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={styles.imageHeart}
        />
      ))}</View>
     
     {/* Word to Guess list */}
      <View style={styles.letterContainer}>
      <FlatList
        data={playList}
        horizontal={true}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
      </View>

      {/* List of all buttons */}
      <FlatList
        data={buttonStates}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={item.pressed ? styles.pressedButton : styles.button}
            disabled={item.pressed}
            onPress={() => handlePress(index, item.letter)}
          >
            <Text style={styles.letter}>{item.letter}</Text>
          </TouchableOpacity>
        )}
        numColumns={7} // Number of columns in the grid
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listLetters}
      />
    
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
  
  listStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 80,
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
    left: 105,
  },
  letterContainer: {
    position: 'absolute',
    top: 435,
    alignSelf: 'center',
  },
  item: {
    fontSize: 50,
    margin: 5,
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },
  imageHeart: {
    width:25,
    height:25,
  },
  heartImage: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  

  listLetters: {
    marginTop:70,
    // flexDirection: 'row',
    
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    alignItems: 'center',
    width: 50,
    height: 65,
    padding: 10,
    margin: 5,
    backgroundColor: 'lightgray',
  },
  pressedButton: {
    borderWidth: 2,
    width: 50,
    height: 65,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: 'red',
  },
  letter: {
    fontSize: 35,
    bottom: 2,
  },
  background: {
    position:'absolute',
    width:400,
    height:600,
  },
});

export default HangMan;
