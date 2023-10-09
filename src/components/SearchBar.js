import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput style={styles.inputStyle} 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Search" 
      value={term}
      onChangeText={onTermChange} 
      onEndEditing={onTermSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#808080",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
