import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../../redux/userSlice";
import { colors, Line } from "../../compoenets/styles";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../../compoenets/GoBack";

const CustomComponent = (props) => {
  return (
    <View style={styles.list}>
      <View style={styles.desc}>
        <View style={styles.iconContainer}>{props.icon}</View>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <MaterialIcons
        name="arrow-forward-ios"
        size={20}
        color="lightgrey"
        onPress={props.onPress}
      />
    </View>
  );
};

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GoBack />
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Avatar
          bg="green.500"
          size="xl"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Line />
      <View style={styles.body}>
        <CustomComponent
          icon={<Ionicons name="settings" size={22} color="#6585e7" />}
          label="Settings"
        />
        <CustomComponent
          icon={<AntDesign name="minuscircle" size={22} color="#6585e7" />}
          label="Billing Details"
        />
        <CustomComponent
          icon={<FontAwesome name="user" size={22} color="#6585e7" />}
          label="Products Management"
        />
        <Line />
        <CustomComponent
          icon={
            <Ionicons name="ios-information-circle" size={22} color="#6585e7" />
          }
          label="Inforamation"
        />
        <CustomComponent
          icon={<MaterialIcons name="logout" size={22} color="#6585e7" />}
          label="Logout"
          onPress={() => {
            dispatch(logOut());
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 0.45,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginVertical: 4,
  },
  email: {
    fontSize: 18,
    fontWeight: "normal",
    color: "black",
    marginVertical: 4,
  },
  buttonContainer: {
    borderRadius: 40,
    backgroundColor: "#3061e4",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    letterSpacing: 0.3,
  },
  body: {
    flex: 0.55,
    alignItems: "center",
  },
  list: {
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  desc: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: "normal",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f5fc",
    width: 35,
    height: 35,
    borderRadius: 5,
  },
});
