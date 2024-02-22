import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type PropsType = {traineeName : string,  batchName: string};

const TraineeCardComponent = (props : PropsType) => {
    
    const{traineeName, batchName} = props;

    const [circleBackgroundColor, setCircleBackgroundColor] = useState(getRandomColor());

    const colorRandomizer = () => {
        const newColor = getRandomColor();
        setCircleBackgroundColor(newColor);
    };
    
    return(
        <View style = {styles.cardContainer}>
            <View style = {styles.profilePicture}>
                <View style = {[styles.circleContainer, {backgroundColor: circleBackgroundColor}]}>
                    <Image 
                    style = {styles.imageLogo}
                    source = {require('../../assets/icons/user.png')}
                    />
                </View>
            </View>
            <View style = {styles.dataPart}>
                <Text style = {styles.traineeName}>
                    {traineeName}
                </Text>
                <Text style =  {styles.batchName}>
                    {batchName}
                </Text>
            </View>
        </View>
    );
}

const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const styles = StyleSheet.create({
    dataPart : {

        flex : 0.8,
        paddingLeft : '8%',
        paddingTop : '8%',
    },
    profilePicture : {
        flex : 0.2
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
    traineeName : {
        fontFamily : 'Poppins-Medium',
        fontSize : 16,
        color : 'black',
    },
    circleContainer : {
        height : 46,
        width : 46,
        borderRadius : 23,
        marginTop : 25,
        marginLeft : 15,
    },
    imageLogo : {
        width : '86%',
        height : '86%',
        marginLeft : 3,
        marginTop : 3,
    }
})


export default TraineeCardComponent;