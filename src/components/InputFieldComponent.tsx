import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type propsType = {labelValue : string, placeholder : string, visible : boolean}
const InputField = (props: propsType) => {
    const {labelValue, placeholder, visible} = props;
    return(
        <View>
            <View style = {styles.container}>
                <Text style = {styles.label}>
                    {labelValue}
                </Text>
                <TextInput
                style = {styles.inputField}
                placeholder={placeholder}
                secureTextEntry={visible}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label : {
        fontSize : 15,
        paddingLeft : 4,
    },
    inputField : {
        width : '100%',
        height : 45,
        borderBottomWidth : 1,
        fontSize : 17,
        color : 'black',
    },
    container : {
        marginLeft : 40,
        marginRight : 40,
        marginTop : 40,
    }
});

export default InputField;