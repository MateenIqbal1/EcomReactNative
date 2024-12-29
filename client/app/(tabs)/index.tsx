import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import Home from "../../components/Home";
import About from "../../components/About";
import ProductDetails from "../../components/screens/ProductDetails";
import Cart from "./../../components/screens/Cart";
import CheckOut from "./../../components/screens/CheckOut";
import Payment from "../../components/screens/Payment";
import Login from "../../components/screens/auth/Login";
import Register from "../../components/screens/auth/Register";
import Account from '../../components/screens/Account/Account';
import Notification from '../../components/screens/Account/Notification'
import Profile from '../../components/screens/Account/Profile'
import MyOrders from '../../components/screens/Account/MyOrders'
import Dashboard from '../../components/screens/Admin/Dashboard'
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="register" component={Register}  options={{ headerShown: false }}/>
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="notifications" component={Notification} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="productDetails" component={ProductDetails} />
          <Stack.Screen name="checkout" component={CheckOut} />
          <Stack.Screen name="myorders" component={MyOrders} />
          <Stack.Screen name="adminPanel" component={Dashboard} />

          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="account" component={Account} />

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
