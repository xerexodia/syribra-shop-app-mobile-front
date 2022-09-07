import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Circle } from "../styles";

const colours = ["white", "grey", "black", "blue","red"];

const ColorBar = () => {
  const [selected, setSelected] = useState();
  return (
    <View style={styles.container}>
      {colours.map((colour, idx) => (
        <Pressable
          key={idx}
          onPress={() => {
            setSelected(idx);
          }}
          style={selected == idx ? styles.pressed:styles.box}
        >
          <Circle colour={colour} />
        </Pressable>
      ))}
    </View>
  );
};

export default ColorBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
  },
  box: {
    padding: 3,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 50,
  },
  pressed: {
    padding: 3,

    borderWidth: 2,
    borderColor: "skyblue",
    borderRadius: 50,
  },
});
