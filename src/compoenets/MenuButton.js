import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import LoginScreen from "../screens/AuthScreens/LoginScreen";

const MenuButton = () => {
  const navigation = useNavigation();
  const user = useSelector(selectUser);

  return (
    <>
      {user ? (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Octicons name="three-bars" size={30} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Octicons name="three-bars" size={30} color="white" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    top: 35,
    left: 20,
    elevation: 15,
  },
});
