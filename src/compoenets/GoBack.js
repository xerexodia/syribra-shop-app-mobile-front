import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="chevron-back-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 45,
    left: 20,
    padding: 5,
    backgroundColor: "#f2f5fc",
    borderRadius: 40,
  },
});
