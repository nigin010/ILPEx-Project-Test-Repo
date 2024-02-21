import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputField from "../../components/InputFieldComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigation } from '@react-navigation/native';
const Login = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ForgotPassword', {});
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.loginLabel}>
                Login
            </Text>
            <InputField labelValue = 'Email' placeholder = 'Email' visible = {false}/>
            <InputField labelValue = 'Password' placeholder = 'Password' visible = {true}/>
            {/* <Text style = {styles.forgotLabel}>
                Forgot Password?
            </Text> */}
            <TouchableOpacity onPress = {onPress}>
                <Text style = {styles.forgotLabel}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>
            <ButtonComponent labelValue='Login' onPress = {onPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        fontFamily : 'Poppins-Light',
        backgroundColor : 'white',
    },
    loginLabel : {
        fontSize : 36,
        textAlign : 'center',
        color : '#000000',
        fontWeight : 'bold',
    },
    forgotLabel : {
        textAlign : 'center',
        paddingTop : 20,
    }
})
export default Login;

