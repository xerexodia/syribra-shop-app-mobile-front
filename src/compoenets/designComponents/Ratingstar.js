import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Ratingstar = ({ rate }) => {
  const ratingArr = Array.from(new Array(Math.floor(rate)));
  return (
    <View style={styles.container}>
      {ratingArr.map((item,idx) => (
        <Entypo key={idx} name="star" size={19} color="#03bafc" />
      ))}
    </View>
  );
};

export default Ratingstar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
