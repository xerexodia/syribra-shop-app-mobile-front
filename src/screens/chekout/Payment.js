import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../compoenets/styles";
import { Octicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addPayment } from "../../redux/checkoutSlice";

const methods = [
  { name: " cash on delivery" },
  { name: " Bank transfer" },
  { name: " card payement" },
];

const Payment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();
  const handleClick = (id) => {
    setSelected(id);
    dispatch(addPayment(methods[id].name));
    setTimeout(() => {
      navigation.navigate("Confirm");
    }, 300);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Choose yor payment method</Text>
      </View>
      <View style={styles.list}>
        {methods.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => handleClick(idx)}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            {selected == idx && (
              <Octicons name="check" size={24} color="green" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "grey",
  },
  item: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
