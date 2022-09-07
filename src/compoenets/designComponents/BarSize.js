import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];
const { width } = Dimensions.get("window");

const BarSize = () => {
  const [selected, setSelected] = useState();
  return (
    <View style={styles.container}>
      {sizes.map((size, idx) => (
        <Pressable
          key={idx}
          onPress={() => {
            setSelected(idx);
          }}
          style={
            selected == idx ? styles.pressedContainer : styles.textContainer
          }
        >
          <LinearGradient
            start={{ x: 0.0, y: 0.35 }}
            end={{ x: 0.5, y: 1.0 }}
            colors={
              selected == idx
                ? ["#469aee", "#2076ce"]
                : ["transparent", "transparent"]
            }
            style={styles.gradient}
          >
            <View>
              <Text style={selected == idx ? styles.pressedText : styles.text}>
                {size}
              </Text>
            </View>
          </LinearGradient>
        </Pressable>
      ))}
    </View>
  );
};

export default BarSize;

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#e4ebf5",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: "#CCCCCC",
  },
  pressedContainer: {
    flex: 0.7,
    height: "140%",
    borderRadius: 5,
    elevation: 5,
    overflow: "hidden",
  },
  pressedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  gradient: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
