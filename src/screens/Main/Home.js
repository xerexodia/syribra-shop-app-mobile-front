import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";
import CustomSwiper from "../../compoenets/CustomSwiper";
import MenuButton from "../../compoenets/MenuButton";
import CartButton from "../../compoenets/CartButton";
import axios from "axios";
import baseUrl from "../../../assets/Common/baseUrl";
import Categories from "../../compoenets/Categories";
import ProductList from "../../compoenets/productComponents/ProductList";
import { findId } from "../../helpers";
import { colors, Title } from "../../compoenets/styles";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsFiltred, setProductsFiltred] = useState([]);
  const [active, setActive] = useState();
  const [loading, setLoading] = useState(true);

  // fetching for categories
  const getCategories = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${baseUrl}categories`,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  // fetching for products
  const getProducts = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${baseUrl}products`,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  // filtering by category
  const changeCtg = (ctg) => {
    {
      ctg === "All"
        ? [setProductsFiltred(products), setActive(true)]
        : [
            setProductsFiltred(products.filter((i) => findId(ctg, i.category))),
            setActive(true),
          ];
    }
  };

  useEffect(() => {
    setActive(-1);
    getCategories().then((response) => setCategories(response.data));
    getProducts().then((response) => {
      setProducts(response.data);
      setProductsFiltred(response.data);
    });
    setLoading(false);
    return () => {
      setActive();
      setCategories();
      setProducts();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f8ff",
      }}
    >
      <StatusBar style="light" />
      <CustomSwiper />
      <MenuButton />
      <CartButton />
      <Categories
        categories={categories}
        categoryFilter={changeCtg}
        products={productsFiltred}
        active={active}
        setActive={setActive}
      />
      <View style={{ flex: 6 }}>
        {loading ? (
          <ActivityIndicator size="large" color="skyblue" />
        ) : productsFiltred.length ? (
          <ProductList products={productsFiltred} />
        ) : (
          <Title>No Products found</Title>
        )}
      </View>
    </View>
  );
};

export default Home;
