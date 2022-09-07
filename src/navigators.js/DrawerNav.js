import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../compoenets/CustomDrawer";
import OrdersScreen from "../screens/userScreens/OrdersScreen";
import ProductsScreen from "../screens/userScreens/ProductsScreen";
import { AntDesign, Octicons } from "@expo/vector-icons";
import MainNav from "./MainNav";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import ProfileNav from "./ProfileNav";
import ChekoutNav from "./ChekoutNav";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const user = useSelector(selectUser);
  return (
    <>
      {user ? (
        <>
          <Drawer.Navigator
            backBehavior="initialRoute"
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
              headerShown: false,
              drawerLabelStyle: { marginLeft: -25 },
            }}
          >
            <Drawer.Screen
              name="Home"
              component={MainNav}
              options={{
                drawerIcon: ({ color }) => (
                  <AntDesign name="home" size={22} color={color} />
                ),
              }}
            />

            <>
              <Drawer.Screen
                name="Profile"
                component={ProfileNav}
                options={{
                  drawerIcon: ({ color }) => (
                    <AntDesign name="profile" size={22} color={color} />
                  ),
                }}
              />
              <Drawer.Screen
                name="Cart"
                component={ChekoutNav}
                options={{
                  drawerIcon: ({ color }) => (
                    <AntDesign name="shoppingcart" size={22} color={color} />
                  ),
                }}
              />
              <Drawer.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                  drawerIcon: ({ color }) => (
                    <Octicons name="checklist" size={22} color={color} />
                  ),
                }}
              />
              {user.isAdmin && (
                <Drawer.Screen
                  name="My Products"
                  component={ProductsScreen}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Octicons name="package" size={22} color={color} />
                    ),
                  }}
                />
              )}
            </>
          </Drawer.Navigator>
        </>
      ) : (
        <MainNav />
      )}
    </>
  );
};

export default DrawerNav;
