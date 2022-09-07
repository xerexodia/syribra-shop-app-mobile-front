import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  return (
    <View>
      <ScrollView>
        {props.products?.map((item, idx) => (
          <View key={idx}>
            <ProductCard item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
