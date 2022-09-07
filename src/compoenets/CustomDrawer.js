import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../redux/userSlice";
import { useNavigation } from "@react-navigation/native";

const firstLetter = (string) => {
  const arr = [];
  string.split(" ").forEach((element) => {
    arr.push(element[0]);
  });
  return arr.join("");
};

const CustomDrawer = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#46a3fc",
        }}
      >
        <View
          style={{
            marginLeft: 20,
            backgroundColor: "white",
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              letterSpacing: 0.2,
              position: "absolute",
              bottom: 10,
              right: 15,
              color: "#46a3fc",
            }}
          >
            {firstLetter(user.name)}
          </Text>
        </View>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 20,
            fontSize: 22,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {user.name}
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            marginBottom: 10,
            fontSize: 18,
            color: "white",
            fontWeight: "600",
          }}
        >
          {user.email}
        </Text>
        <View
          style={{
            flex: 10,
            backgroundColor: "white",
            paddingTop: 10,
          }}
        >
          <DrawerItem
            label={"Home"}
            icon={({ color }) => (
              <AntDesign name="home" size={22} color={color} />
            )}
            onPress={() => navigation.navigate("Main")}
          />
          <DrawerItem
            label={"Profile"}
            icon={({ color }) => (
              <AntDesign name="profile" size={22} color={color} />
            )}
            onPress={() =>
              navigation.navigate("Profile", { screen: "ViewProfile" })
            }
          />
          <DrawerItem
            label={"Cart"}
            icon={({ color }) => (
              <AntDesign name="shoppingcart" size={22} color={color} />
            )}
            onPress={() =>
              navigation.navigate("Cart", { screen: "CartScreen" })
            }
          />
          <DrawerItem
            label={"Orders"}
            icon={({ color }) => (
              <Octicons name="checklist" size={22} color={color} />
            )}
            onPress={() => navigation.navigate("Orders")}
          />
          {user.isAdmin && (
            <DrawerItem
              label={"My Products"}
              icon={({ color }) => (
                <Octicons name="package" size={22} color={color} />
              )}
              onPress={() => navigation.navigate("My Products")}
            />
          )}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="share-social-outline" size={22} />
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 10,
            }}
          >
            Invite a friend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            dispatch(logOut());
          }}
        >
          <Ionicons name="exit-outline" size={22} />
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 10,
            }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
