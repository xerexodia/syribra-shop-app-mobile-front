import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ratingstar from "../designComponents/Ratingstar";
import { useNavigation } from "@react-navigation/native";

const ProductCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.replace("ProductDetails", { item: props.item });
      }}
    >
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: props.item.image.replace(/localhost/, "10.0.2.2") }}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.item.name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text>{props.item.description.substring(0, 50)}...</Text>
        </View>
        <View style={styles.subDetails}>
          <Ratingstar rate={props.item.rating} />

          <Text style={styles.review}>{props.item.numReviews}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: "flex-end",
            marginRight: 6,
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
            }}
          >
            ${props.item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
    overflow: "hidden",
    borderRadius: 10,
    elevation: 10,
    backgroundColor: "#f5f8ff",
  },
  imgContainer: {
    width: 150,
    height: 150,
    overflow: "hidden",
    backgroundColor: "white",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    flexShrink: 1,
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    paddingTop: 3,
    paddingRight: 3,
  },
  descriptionContainer: {
    flex: 3,
  },
  subDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  review: {
    color: "gray",
    fontSize: 14,
    marginLeft: 8,
  },
});
