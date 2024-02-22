import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigation } from "./src/navigation/AppNavigation";
import SplashScreen from "./src/screens/SplashScreen";


const App = () => {
    const [splash, setSplash] = useState(true);
   
    setTimeout(()=>{setSplash(false)},3000);

    if(splash)
    {
      return(
        <SplashScreen />
      )
    } else {
	return (
		<NavigationContainer>
			<HomeStackNavigation/>
		</NavigationContainer>
	);
    }
};

export default App;
