import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder } from "../../redux/checkoutSlice";
import { clearCard } from "../../redux/cardSlice";
import { selectUser, selectUserToken } from "../../redux/userSlice";
import axios from "axios";
import baseUrl from "../../../assets/Common/baseUrl";

const getTotal = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element.item.price * element.qte;
  });
  return total;
};

const Confirm = () => {
  const navigation = useNavigation();
  const userToken = useSelector(selectUserToken);
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  const user = useSelector(selectUser);
  const t = () =>
    order.products.map((element) => {
      return {
        quantity: element.qte,
        product: element.item.id,
      };
    });
  const config = {
    headers: { Authorization: `Bearer ${userToken}` },
  };
  const handleOrder = () => {
    axios
      .post(
        `${baseUrl}orders`,
        {
          orderItems: t(),
          shippingAddress1: order.adress.street,
          city: order.adress.city,
          zip: order.adress.zip,
          country: order.adress.country,
          phone: order.adress.phone,
          user: user.id,
        },
        config
      )
      .then((res) => {
        dispatch(clearCard());
        navigation.jumpTo("Orders");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.text}>Confirm your order</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.orderContainer}>
          <Text style={styles.title}>Shipping to:</Text>
          {order.adress &&
            Object.keys(order?.adress).map((key, idx) => (
              <View style={styles.adressContainer} key={idx}>
                <Text style={styles.label}>{key}:</Text>
                <Text style={styles.adress}>{order.adress[key]}</Text>
              </View>
            ))}
          <Text style={styles.title}>Payment Method:</Text>
          <Text style={styles.label}>{order.payment}</Text>
          <Text style={styles.title}>Items:</Text>
          <ScrollView contentContainerStyle={styles.itemContainer}>
            {order.products.map((item, idx) => (
              <View key={idx} style={styles.item}>
                <View style={styles.box}>
                  <Image
                    source={{
                      uri: item.item.image.replace(/localhost/, "10.0.2.2"),
                    }}
                    resizeMode="stretch"
                    style={styles.img}
                  />
                  <View style={styles.desc}>
                    <Text style={styles.descText}>{item.item.name}</Text>
                    <Text>qté: {item.qte}</Text>
                  </View>
                </View>
                <Text style={styles.price}>
                  ${(item.item.price * item.qte).toFixed(2)}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceTotal}>
          <Text style={styles.totalText}>Total Refund</Text>
          <Text style={styles.totalPrice}>
            ${getTotal(order.products).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "grey",
    fontWeight: "bold",
  },
  body: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  orderContainer: {
    flexShrink: 1,
    width: 300,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    alignSelf: "center",
  },
  adressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    marginLeft: 10,
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: "grey",
    marginRight: 4,
  },
  adress: {
    fontSize: 17,
    fontWeight: "normal",
    color: "black",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  itemContainer: {},
  box: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  descText: {
    marginBottom: 2,
    color: "black",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-end",
    color: "#3061e4",
  },
  footer: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: 10,
    paddingHorizontal: 30,
    elevation: 20,
  },
  priceTotal: {
    alignItems: "center",
    justifyContent: "center",
  },
  totalText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "grey",
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3061e4",
  },
  buttonContainer: {
    backgroundColor: "#3061e4",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
