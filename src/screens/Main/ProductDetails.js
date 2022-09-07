import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ColorBar from "../../compoenets/designComponents/ColorBar";
import BarSize from "../../compoenets/designComponents/BarSize";
import Ratingstar from "../../compoenets/designComponents/Ratingstar";
import MenuButton from "../../compoenets/MenuButton";
import CartButton from "../../compoenets/CartButton";
import CustomButton from "../../compoenets/CustomButton";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";
import { StatusBar } from "expo-status-bar";

const ProductDetails = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const item = props.route.params.item;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f8ff",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: item.image.replace(/localhost/, "10.0.2.2") }}
          resizeMode="stretch"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>
      <ScrollView
        style={{
          flex: 1,
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              letterSpacing: 0.2,
            }}
          >
            {item.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.2,
              marginTop: 5,
            }}
          >
            ${item.price}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 60,
            }}
          >
            <Ratingstar rate={item.rating} />
            <Text
              style={{
                color: "grey",
                marginLeft: 6,
              }}
            >
              {item.numReviews}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginBottom: 10,
            }}
          >
            Colour:
          </Text>
          <ColorBar />
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginBottom: 10,
            }}
          >
            Size:
          </Text>
          <View style={{ alignSelf: "center" }}>
            <BarSize />
          </View>
        </View>
        <View
          style={{
            flexS: 2,
            marginBottom: 20,
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginBottom: 10,
            }}
          >
            Product description:
          </Text>
          <Text
            style={{
              textAlign: "justify",
              letterSpacing: 0.2,
              lineHeight: 18,
            }}
          >
            {item.richDescription}
          </Text>
        </View>
      </ScrollView>
      <MenuButton />
      <CartButton />
      <View
        style={{
          flex: 0.1,
          marginBottom: 30,
          marginTop: 10,
          alignSelf: "center",
          backgroundColor: "transparent",
        }}
      >
        <CustomButton
          title="Add to cart"
          onPress={() => {
            dispatch(addToCard(item));
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
