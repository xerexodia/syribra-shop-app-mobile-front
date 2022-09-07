import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../compoenets/styles";
import CustomButton from "../../compoenets/CustomButton";
import { Formik } from "formik";
import Input from "../../compoenets/Input";
import KeyboardWrapper from "../../compoenets/KeyboardWrapper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addAdress, selectOrder } from "../../redux/checkoutSlice";

const Shipping = () => {
  const navigation = useNavigation();
  const adress = useSelector(selectOrder);
  const dispatch = useDispatch();

  const handleShipping = (credentials, setSubmitting) => {
    const checkEmpty = (el) => {
      if (el) {
        return true;
      }
    };
    Object.values(credentials).every(checkEmpty) &&
      (dispatch(addAdress(credentials)), navigation.navigate("Payment"));
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shipping Adress</Text>
      </View>
      <View style={styles.body}>
        <KeyboardWrapper>
          <Formik
            initialValues={{
              country: "",
              city: "",
              zip: "",
              appartement: "",
              street: "",
              phone: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == "" || values.password == "") {
                setSubmitting(false);
              } else {
                handleShipping(values, setSubmitting);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Input
                  label="Street"
                  icon="milestone"
                  placeholder="oxford street"
                  onChangeText={handleChange("street")}
                  onBlur={handleBlur("street")}
                  value={values.street}
                />
                <Input
                  label="Phone"
                  icon="device-mobile"
                  placeholder="00 000 000"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                <Input
                  label="Appartement"
                  icon="home"
                  placeholder=" movenpick"
                  onChangeText={handleChange("appartement")}
                  onBlur={handleBlur("appartement")}
                  value={values.appartement}
                />
                <Input
                  label="Zip"
                  icon="file-zip"
                  placeholder=" 9001"
                  onChangeText={handleChange("zip")}
                  onBlur={handleBlur("zip")}
                  value={values.zip}
                />
                <Input
                  label="City"
                  icon="location"
                  placeholder=" london"
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  value={values.city}
                />
                <Input
                  label="Country"
                  icon="location"
                  placeholder="U.K"
                  onChangeText={handleChange("country")}
                  onBlur={handleBlur("country")}
                  value={values.country}
                />
                <CustomButton onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
        </KeyboardWrapper>
      </View>
    </View>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  header: {
    flex: 0.1,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "grey",
  },
  body: {
    flex: 0.9,
  },
});
