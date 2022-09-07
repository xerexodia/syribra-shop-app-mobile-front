import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import baseUrl from "../../../assets/Common/baseUrl";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../redux/userSlice";
import { StatusBar } from "expo-status-bar";

const OrdersScreen = () => {
  const [order, setOrder] = useState([]);
  const userToken = useSelector(selectUserToken);
  const config = {
    headers: { Authorization: `Bearer ${userToken}` },
  };
  // fetching orders
  const getOrders = () => {
    return axios
      .get(`${baseUrl}orders`, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrders()
      .then((res) => setOrder(res))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Your Orders</Text>
      </View>
      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          style={{ flex: 1, width: "100%" }}
        >
          {order?.map((item, idx) => (
            <View key={idx} style={{ width: "90%", margin: 10 }}>
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.75, y: 1.0 }}
                colors={["#429cf5", "#186bbd"]}
                style={styles.itemContainer}
              >
                <View style={styles.itemId}>
                  <Text style={styles.text}>Order Number</Text>
                  <Text style={styles.text}>#{item.id}</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.text}>Status: {item.status}</Text>
                  <Text style={styles.text}>
                    Adress: {item.shippingAddress1}
                  </Text>
                  <Text style={styles.text}>City: {item.city}</Text>
                  <Text style={styles.text}>Country: {item.country}</Text>
                  <Text style={styles.text}>
                    Date Orddred: {item.dateOrdered.substring(0, 10)}
                  </Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.text}>Price: </Text>
                  <Text style={styles.price}>
                    ${item.totalPrice.toFixed(2)}
                  </Text>
                </View>
              </LinearGradient>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "grey",
  },
  body: {
    flex: 0.8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    width: "100%",
    backgroundColor: "red",

    padding: 10,
    borderRadius: 10,
  },
  itemId: {
    alignSelf: "center",
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceContainer: {
    alignSelf: "flex-end",
    marginRight: 20,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
