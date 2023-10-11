import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <Image style={styles.scrabbleImage} source={require('../../assets/scrabble_home.jpg')}/>
      <TouchableOpacity onPress={() => navigation.navigate('Hang')}>
        <Text style={styles.buttonText}>Start Single Player</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Start Multi Player</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>High Score Board</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#AFE1AF',
justifyContent:'space-around', padding:45,
  },
  buttonText: {
    fontSize: 40,
    borderWidth: 4,
    borderRadius: 5,
    borderColor: '#ff9200',
    width: 380,
    textAlign:'center',
    backgroundColor: '#FFD700',
  },
  scrabbleImage: {
    resizeMode: 'contain',
    height: 300,
    width: 300,
  },
});

export default HomeScreen;