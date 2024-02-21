import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputField from "../../components/InputFieldComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Login', {});
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.loginLabel}>
                Reset Password
            </Text>
            <InputField labelValue = 'Password' placeholder = 'Password' visible = {true}/>
            <InputField labelValue = 'Confirm password' placeholder = 'Password' visible = {true}/>
            <ButtonComponent labelValue='Save' onPress = {onPress}/>
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
export default ResetPassword;

