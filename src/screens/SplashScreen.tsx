import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = ()=>{
    return (<View style={styles.container}>
        <Text style = {styles.logo}>
            ILPEx
        </Text>
    </View>
    )
}
 
const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignContent : 'center',
        height : '100%',
        backgroundColor:'#8518FF',
        flexDirection : 'column',
    },
    logo : {
        textAlign : 'center',
        fontFamily : 'Poppins-SemiBold',
        color : 'white',
        fontSize : 48,
    }
});

export default SplashScreen;