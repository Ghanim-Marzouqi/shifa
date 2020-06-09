import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AmbulanceRequestScreen from "../screens/AmbulanceRequestScreen";
import ContactsScreen from "../screens/ContactsScreen";
import HealthAssistantScreen from "../screens/HealthAssistantScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import NewsScreen from "../screens/NewsScreen";
import TipsAndAdviceScreen from "../screens/TipsAndAdviceScreen";

const Stack = createStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Map" component={MapScreen} />
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="AmbulanceRequest" component={AmbulanceRequestScreen} />
    <Stack.Screen name="HealthAssistant" component={HealthAssistantScreen} />
    <Stack.Screen name="TipsAndAdvice" component={TipsAndAdviceScreen} />
    <Stack.Screen name="Contacts" component={ContactsScreen} />
  </Stack.Navigator>
);

export default HomeNavigation;
