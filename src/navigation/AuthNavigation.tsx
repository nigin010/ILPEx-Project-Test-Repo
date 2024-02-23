import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/authentication/Login";
import ForgotPassword from "../screens/authentication/ForgotPassword";
import ResetPassword from "../screens/authentication/ResetPassword";

const StackNav = createNativeStackNavigator();

export const  AuthStackNavigation = () => {
    return(
        <StackNav.Navigator>
            <StackNav.Screen
                name = "LoginScreen"
                component = {Login}
                options= {{
                    headerShown : false,
                }}
            />
            <StackNav.Screen
                name = "ForgotPassword"
                component = {ForgotPassword}
                options = {{
                    headerShown : false,
                }}
            />
            <StackNav.Screen
                name = "ResetPassword"
                component ={ResetPassword}
                options = {{
                    headerShown : false,
                }}
            />
        </StackNav.Navigator>      
    );
}

export default AuthStackNavigation;