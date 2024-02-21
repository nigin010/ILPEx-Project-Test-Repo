import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type propsType = {labelValue : string, onPress: () => any}
const ButtonComponent = (props: propsType) => {
    const {labelValue, onPress} = props;
    return(
        <View style = {styles.container}>
            <TouchableOpacity style={styles.buttonStyling} onPress={onPress}>
                <Text style={styles.label}>{labelValue}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyling : {
        backgroundColor : '#8518FF',
        // width : '50%',
        width : 201,
        alignContent : 'center',
        justifyContent: 'center',
        marginTop : '18%',
        height : 48,
        borderRadius : 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
    label: {
        textAlign: 'center',
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
})

export default ButtonComponent;