import React, {useState} from "react";

import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const HangManHome = ({navigation}) => {
  const [wordToGuess, setWordToGuess] = useState("HANGMAN"); // The word to be guessed
  const [guessedLetters, setGuessedLetters] = useState([]); // Guessed letters
  const maxAttempts = 6; // Maximum allowed attempts
  const [attempts, setAttempts] = useState(0); // Current attempts

  // Check if the word includes the guessed letter
  const checkGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!wordToGuess.includes(letter)) {
        setAttempts(attempts + 1);
      }
    }
  };

  // Render the word to be guessed with underscores for unrevealed letters
  const renderWord = () => {
    return wordToGuess
      .split('')
      .map((letter, index) =>
        guessedLetters.includes(letter) ? (
          <Text key={index} style={styles.letter}>
            {letter}
          </Text>
        ) : (
          <Text key={index} style={styles.placeholder}>
            _
          </Text>
        )
      );
  };

  // Check if the game is won or lost
  const isGameFinished = attempts >= maxAttempts || !renderWord().includes('_');

  return (
    <View style={styles.container}>
      {/* <Image source={require('./background.jpg')} style={styles.backgroundImage} /> */}
      <Text style={styles.title}>Cool Hangman Game</Text>
      <View style={styles.wordContainer}>{renderWord()}</View>
      {isGameFinished && (
        <Text style={styles.resultText}>
          {attempts >= maxAttempts ? 'You Lost' : 'You Won!'}
        </Text>
      )}
      {!isGameFinished && (
        <View style={styles.keyboard}>
          <Text style={styles.keyboardTitle}>Guess a Letter:</Text>
          <View style={styles.keyboardButtons}>
            {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => checkGuess(letter)}
                disabled={guessedLetters.includes(letter)}
              >
                <Text style={styles.buttonText}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  wordContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  letter: {
    fontSize: 24,
    margin: 5,
    color: 'white',
  },
  placeholder: {
    fontSize: 24,
    margin: 5,
    color: 'white',
    opacity: 0.5,
  },
  keyboard: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
  },
  keyboardTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  keyboardButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HangManHome;