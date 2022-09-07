import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";

const { width } = Dimensions.get("window");

const CustomButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.75, y: 1.0 }}
          colors={["#429cf5", "#186bbd"]}
          style={styles.gradient}
        >
          <Text style={styles.text}>{props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: 60,
  },
  gradient: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 0.2,
    lineHeight: 32,
  },
});
