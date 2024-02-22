import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type PropsType = {assessmentName : string,  batchName: string};

const AssessmentCardComponent = (props : PropsType) => {
    
    const{assessmentName, batchName} = props;

    return(
        <View style = {styles.cardContainer}>
            <View style = {styles.dataPart}>
                <Text style = {styles.assessmentName}>
                    {assessmentName}
                </Text>
                <Text style =  {styles.batchName}>
                    {batchName}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dataPart : {

        flex : 0.8,
        paddingLeft : '8%',
        paddingTop : '8%',
    },
    cardContainer : {
        backgroundColor : '#FAFAFA',
        height : 90,
        borderRadius : 17,
        elevation : 4,
        shadowColor : 'black',
        marginBottom : 25,
        flexDirection : 'row'
    },
    batchName : {
        color : '#737373',
        fontSize : 14,
        paddingBottom : 2,
    },
    assessmentName : {
        fontFamily : 'Poppins-Medium',
        fontSize : 16,
        color : 'black',
    }
})


export default AssessmentCardComponent;