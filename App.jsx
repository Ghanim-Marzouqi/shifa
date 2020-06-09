import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./src/navigations/AuthNavigation";
import NavigationTheme from "./src/config/NavigationTheme";

export default App = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigation />
    </NavigationContainer>
  );
};
