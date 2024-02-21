import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputField from "../../components/InputFieldComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {

    const navigation = useNavigation();

    const [count, setCount] = useState<number>(0);
    const onClick = () => {
        console.log("hi");
        setCount(prevCount => prevCount + 1);
        console.log(count);
        navigation.navigate('ResetPassword', {});
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.loginLabel}>
                Forgot Password?
            </Text>
            <View style = {styles.paragraphBlock}>
                <Text style = {styles.paragraphContainer}>
                    To initiate the password reset process,
                </Text>
                <Text style = {styles.paragraphContainer}>
                    kindly provide your email address
                </Text>
                <Text style = {styles.paragraphContainer}>
                    below.
                </Text>
            </View>
            <InputField labelValue = 'Email' placeholder = 'Email' visible = {false}/>
            <ButtonComponent labelValue='Submit' onPress={onClick}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : 'white',
    },
    loginLabel : {
        fontSize : 24,
        textAlign : 'center',
        color : '#000000',
        fontWeight : 'bold',
    },
    forgotLabel : {
        textAlign : 'center',
        paddingTop : 20,
    },
    passwordDescription : {
        fontSize : 12,
    },
    paragraphContainer : {
        textAlign : 'center',
    },
    paragraphBlock : {
        marginTop : 25,
    }
})
export default ForgotPassword;

