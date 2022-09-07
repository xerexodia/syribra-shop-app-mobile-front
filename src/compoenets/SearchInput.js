import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Octicons, Ionicons } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Octicons name="search" size={20} color="white" />
      <TextInput
        style={styles.input}
        placeholder="What are you looking for ?"
        placeholderTextColor="white"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.22)",

    borderRadius: 3,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    height: "100%",
    fontSize: 18,
    fontWeight: "400",
  },
});
