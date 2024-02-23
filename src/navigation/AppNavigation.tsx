import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Trainees from "../screens/Batch/TraineeScreen/TraineeScreen";
import Batches from "../screens/Batch/BatchScreen/BatchScreen";
import Assessment from "../screens/Batch/AssessmentScreen/AssessmentScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StackNav = createNativeStackNavigator();
const BottomNav = createBottomTabNavigator();

export const  HomeStackNavigation = () => {
    return(
        <StackNav.Navigator>
            <StackNav.Screen
                name = 'BatchBottomNav'
                component = {BatchBottomNav}
                options = {{
                    headerShown : false
                }}
            />
        </StackNav.Navigator>
        
    );
}

const BatchBottomNav = () => {
    return (
            <BottomNav.Navigator 
                initialRouteName='Batches' 
                screenOptions={{
                tabBarActiveTintColor: '#8518FF',
                tabBarStyle: {
                height: 73,
                borderTopStartRadius: 35,
                borderTopEndRadius: 35,
                overflow : 'hidden'
                },
                tabBarLabelStyle : {
                    marginBottom : 12,
                    fontSize : 12,
                }
            }}
            >
            <BottomNav.Screen
                name = 'Trainees'
                component = {Trainees}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Trainees',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <BottomNav.Screen
                name = 'Batches'
                component = {Batches}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Batches',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
                    ),
                }}
            />
            <BottomNav.Screen
                name = 'Assessment'
                component = {Assessment}
                options={{
                    tabBarLabel: 'Assessments',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="note-plus" color={color} size={26} />
                    ),
                }}
            />
            {/* <BottomNav.Screen
                name = 'Logout'
                component = {Logout}
                options={{
                    tabBarLabel: 'Logout',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="log-out" color={color} size={26} />
                    ),
                }}
            /> */}
        </BottomNav.Navigator>
    );
}

export default HomeStackNavigation;