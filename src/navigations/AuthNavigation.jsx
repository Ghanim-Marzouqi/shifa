import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterNavigator from "./RegisterNavigator";
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterNavigator} />
    <Stack.Screen
      name="TermsAndConditions"
      component={TermsAndConditionsScreen}
    />
  </Stack.Navigator>
);

export default AuthNavigation;
