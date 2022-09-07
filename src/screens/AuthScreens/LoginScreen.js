import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  Dimensions,
} from "react-native";
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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [msg, setMsg] = useState();
  const [msgType, setMsgType] = useState();

  const dispatch = useDispatch();

  const handleLogin = (credentials, setSubmitting) => {
    handleMsg(null);
    const url = `${baseUrl}users/login`;
    axios
      .post(url, credentials)
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
      <StatusBar style="dark" />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Welcome To </Text>
        <Text style={styles.text}>Syribra Shop</Text>
      </View>
      <View style={styles.formContainer}>
        <KeyboardWrapper>
          <Formik
            initialValues={{ email: "", password: "" }}
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
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Input
                  label="Email Address"
                  icon="mail"
                  placeholder="email@email.com"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
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
                <MsgBox type={msgType}>{msg}</MsgBox>
                {!isSubmitting && (
                  <CustomButton onPress={handleSubmit} title="Login" />
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
                <Line />

                <ExtraView>
                  <ExtreText>Don't have an account already!</ExtreText>
                  <TextLink onPress={() => navigation.navigate("SignUp")}>
                    <TextLinkContent>Sign Up</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </View>
            )}
          </Formik>
        </KeyboardWrapper>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 42,
    letterSpacing: 0.5,
  },
  formContainer: {
    flex: 2,
  },
});
