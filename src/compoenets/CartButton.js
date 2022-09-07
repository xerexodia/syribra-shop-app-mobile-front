import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCard } from "../redux/cardSlice";

const CartButton = () => {
  const navigation = useNavigation();
  const card = useSelector(selectCard);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("CartView")}
    >
      <MaterialIcons name="shopping-cart" size={40} color="white" />
      <View style={styles.badge}>
        <Text style={styles.text}>{card.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    position: "absolute",
    top: 35,
    right: 20,
  },
  badge: {
    position: "absolute",
    width: 18,
    backgroundColor: "#46a3fc",
    borderRadius: 40,
    alignContent: "center",
    right: 10,
    top: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    lineHeight: 18,
  },
});
