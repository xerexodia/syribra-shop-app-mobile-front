import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQte,
  increaseQte,
  rmoveFromCard,
  selectCard,
} from "../../redux/cardSlice";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import MenuButton from "../../compoenets/MenuButton";
import { useNavigation } from "@react-navigation/native";
import { addProducts } from "../../redux/checkoutSlice";
import { selectUser } from "../../redux/userSlice";
const getTotal = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element.item.price * element.qte;
  });
  return total;
};

const PlusMinus = (props) => {
  return (
    <View style={styles.plusMinusContainer}>
      <AntDesign
        name="minussquare"
        size={22}
        color="lightgrey"
        onPress={props.onMinusPress}
      />
      <Text style={styles.qteText}>{props.qte}</Text>
      <AntDesign
        name="plussquare"
        size={22}
        color="#429cf5"
        onPress={props.onPlusPress}
      />
    </View>
  );
};
const Close = (props) => {
  return (
    <View style={styles.closeButton}>
      <AntDesign
        name="closecircle"
        size={22}
        color="red"
        onPress={props.close}
      />
    </View>
  );
};
const CartScreen = () => {
  const items = useSelector(selectCard);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{ x: 1.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      colors={["#429cf5", "#186bbd"]}
      style={styles.container}
    >
      <MenuButton />
      <View style={styles.header}>
        <Text style={styles.textHeader}>My Shopping Cart</Text>
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        {items?.map((item, idx) => (
          <View style={styles.card} key={idx}>
            <Image
              source={{ uri: item.item.image.replace(/localhost/, "10.0.2.2") }}
              resizeMode="stretch"
              style={styles.image}
            />
            <View style={styles.description}>
              <Text style={styles.textName}>
                {item.item.name.substring(0, 10)}
              </Text>
              <Text style={styles.textBrand}>
                {item.item.brand.substring(0, 10)}
              </Text>
              <PlusMinus
                qte={item.qte}
                onPlusPress={() =>
                  dispatch(increaseQte({ itemId: item.item.id }))
                }
                onMinusPress={() =>
                  dispatch(decreaseQte({ itemId: item.item.id }))
                }
              />
            </View>
            <Text style={styles.price}>
              ${(item.item.price * item.qte).toFixed(2)}
            </Text>
            <Close
              close={() => dispatch(rmoveFromCard({ itemId: item.item.id }))}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.price}>$ {getTotal(items).toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            if (user) {
              items.length > 0 &&
                (navigation.navigate("Checkout"), dispatch(addProducts(items)));
            } else {
              navigation.navigate("Login");
            }
          }}
        >
          <LinearGradient
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}
            colors={["#429cf5", "#186bbd"]}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Checkout</Text>
            <AntDesign name="arrowright" size={26} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "white",
    lineHeight: 32,
  },
  body: {
    flex: 0.5,
    width: "100%",
    padding: 8,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  card: {
    width: "95%",
    height: 110,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    elevation: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  image: {
    height: 90,
    width: 80,
    borderRadius: 10,
    marginRight: 14,
  },
  description: {
    alignItems: "center",
    width: 100,
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textBrand: {
    marginBottom: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#429cf5",
    marginLeft: 40,
  },
  total: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 40,
    marginBottom: 10,
  },
  footer: {
    flex: 0.3,
    width: "100%",
    backgroundColor: "white",
    elevation: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    width: 160,
    height: 50,
    overflow: "hidden",
    borderRadius: 40,
    marginLeft: 70,
  },
  buttonGradient: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  plusMinusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  qteText: {
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: "900",
  },
  closeButton: {
    position: "absolute",
    top: -5,
    right: -5,
  },
});
