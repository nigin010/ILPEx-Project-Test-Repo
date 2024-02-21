import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigation } from "./src/navigation/AppNavigation";

const App = () => {
  return (
    <NavigationContainer>
		<HomeStackNavigation/>
	</NavigationContainer>
  );
};

export default App;