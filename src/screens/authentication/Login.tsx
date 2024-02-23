import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputField from "../../components/InputFieldComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigation } from '@react-navigation/native';
import loginUser from "./AuthenticationAPIHook";
import { setStringItem } from "../../utils/Utils";
import Constants from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { userLogin } from "../../context/userSlice";
const Login = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const onPressForgotPassword = () => {
        navigation.navigate('ForgotPassword', {});
    }

    const[loginUsername, setLoginUsername] = useState('');
    const handleEmailChange = (value : string) => {
        setLoginUsername(value);
    }

    const [ loginPassword, setLoginPassword] = useState('');
    const handlePasswordChange = (passwordText : string) => {
        setLoginPassword(passwordText);
    }

    const onPressLogin = async() => {
        try {
            const{success, statusCode, errorMessage, loginResp} = await loginUser({loginUsername, loginPassword});
            if(success === true)
            {
                setStringItem(Constants.IS_LOGIN, 'true');
                dispatch(userLogin(true));
            }
            else
                console.log("Bleh")
        } catch(error)
        {
            console.log(error);
        }

        // console.log(loginUsername);
        // console.log(loginPassword);
        // loginUser({loginUsername, loginPassword});
        // navigation.navigate('BatchBottomNav', {});
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.loginLabel}>
                Login
            </Text>
            <InputField 
                labelValue = 'Email' 
                placeholder = 'Email' 
                visible = {false}
                value = {loginUsername}
                onChangeText = {handleEmailChange}
            />
            <InputField 
                labelValue = 'Password' 
                placeholder = 'Password' 
                visible = {true}
                value = {loginPassword}
                onChangeText={handlePasswordChange}
            />
            <TouchableOpacity onPress = {onPressForgotPassword}>
                <Text style = {styles.forgotLabel}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>
            <ButtonComponent labelValue='Login' onPress = {onPressLogin}/>
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
        fontSize : 36,
        textAlign : 'center',
        color : '#000000',
        fontFamily : 'Poppins-Medium',

    },
    forgotLabel : {
        textAlign : 'center',
        paddingTop : 20,
        fontFamily : 'Poppins-Regular',
    }
})
export default Login;

