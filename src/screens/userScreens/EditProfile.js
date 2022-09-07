import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Avatar } from "native-base";
import GoBack from "../../compoenets/GoBack";
import React, { useState } from "react";
import Input from "../../compoenets/Input";
import KeyboardWrapper from "../../compoenets/KeyboardWrapper";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonText,
  colors,
  ExtraView,
  ExtreText,
  Line,
  MsgBox,
  StyledButton,
  TextLink,
  TextLinkContent,
} from "../../compoenets/styles";
import baseUrl from "../../../assets/Common/baseUrl";
import { selectUser, setCredentials } from "../../redux/userSlice";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../compoenets/CustomButton";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = () => {
  const user = useSelector(selectUser);
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [msg, setMsg] = useState();
  const [msgType, setMsgType] = useState();

  const handleLogin = (credentials, setSubmitting) => {
    handleMsg(null);
    const url = `${baseUrl}users/${user.id}`;
    axios
      .put(url, credentials)
      .then((res) => {
        const result = res.data;
        if (!result) {
          handleMsg("something went wrong");
        } else {
          dispatch(
            setCredentials({
              user: {
                id: result.user._id,
                name: result.user.name,
                email: result.user.email,
                isAdmin: result.user.isAdmin,
              },
              token: result.token,
            })
          );
        }
        setSubmitting(false);
      })
      .catch((err) => {
        setSubmitting(false);
        console.log(err);
      });
  };
  const handleMsg = (message, type = "Echec") => {
    setMsg(message);
    setMsgType(type);
  };
  return (
    <View style={styles.container}>
      <GoBack />
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.title}> Edit Profile</Text>
        <Avatar
          bg="green.500"
          size="xl"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
      </View>

      <View style={styles.body}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            country: "",
            city: "",
            zip: "",
            appartement: "",
            street: "",
            phone: "",
            name: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "" || values.password == "") {
              handleMsg("champs vides!");
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
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
            <ScrollView
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Input
                label="Email Adress"
                icon="mail"
                placeholder="email@email.com"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Input
                label="Name"
                icon="person"
                placeholder="jack"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
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
                label="Password"
                icon="lock"
                placeholder=" * * * * * * "
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Input
                label="Street"
                icon="milestone"
                placeholder="oxford street"
                onChangeText={handleChange("street")}
                onBlur={handleBlur("street")}
                value={values.street}
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
              <MsgBox type={msgType}>{msg}</MsgBox>
              {!isSubmitting && (
                <CustomButton onPress={handleSubmit} title="Submit" />
              )}
              {isSubmitting && (
                <StyledButton>
                  <ActivityIndicator
                    size="large"
                    color={colors.primary}
                    disabled={true}
                  />
                </StyledButton>
              )}
            </ScrollView>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  body: {
    flex: 0.7,
    alignItems: "center",
  },
});
