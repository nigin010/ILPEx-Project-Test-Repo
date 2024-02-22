import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PropsType = {batchName : string, traineeNo : string, date : string};
const BatchCardComponent = (props : PropsType) => {

    const {batchName, traineeNo, date} = props;
    return(
        <View style = {styles.cardContainer}>
            <View style = {styles.dataPart}>
                <Text style = {styles.batchName}>
                    {batchName}
                </Text>
                <View style = {styles.rowTwoContent}>
                    <Text style =  {styles.traineeName}>Trainees</Text>
                    <View style = {styles.traineeCountContainer}>
                        <Text style = {styles.traineeCount}>
                            {traineeNo}
                        </Text>
                    </View>
                </View>
                <Text style = {styles.date}>
                    {date}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dataPart : {
        paddingLeft : '8%',
        paddingTop : '4%',
    },
    cardContainer : {
        backgroundColor : '#FAFAFA',
        height : 90,
        borderRadius : 17,
        elevation : 5,
        shadowColor : 'black',
        marginBottom : 35,
    },
    traineeName : {
        color : '#737373',
        fontSize : 13,
        paddingBottom : 2,
    },
    batchName : {
        fontFamily : 'Poppins-Medium',
        fontSize : 14,
        color : 'black',
    },
    traineeCountContainer : {
        width : 23.13,
        height : 17.33,
        backgroundColor : '#D9D9D9',
        borderRadius : 5,
        marginLeft : 5,
    },
    rowTwoContent : {
        flexDirection : 'row'
    }, 
    traineeCount : {
        textAlign : 'center',
        fontFamily : 'Poppins-Medium',
        fontSize : 11,
        color : '#8F00FF',
    },
    date : {
        fontFamily : 'Poppins-Medium',
        color : '#8F00FF',
    }
})
export default BatchCardComponent;