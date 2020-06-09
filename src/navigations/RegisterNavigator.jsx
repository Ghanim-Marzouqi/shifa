import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import PersonalInfoScreen from "../screens/PersonalInfoScreen";

const Stack = createStackNavigator();

const RegisterNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
  </Stack.Navigator>
);

export default RegisterNavigator;
