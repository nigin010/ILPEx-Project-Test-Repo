import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TraineeCardComponent from "../../../components/TraineeCardComponent";
import { getAllTraineeAPI } from "./TraineeAPIHook";
import { TextInput } from "react-native-paper";
const Trainees = () => {

    const [AllTraineeList, setAllTraineeList] = useState<any[]>([]);

	useEffect(() => {
		const getStories = async() => {
			try {
				const {contentResp, errorMessage} = await getAllTraineeAPI('v1/11c2ea69-b0f8-4c5d-9aaf-1673f6faac76',);
				setAllTraineeList(contentResp);
			} catch(error) {
				console.error('Error',error);
			}
		};
		getStories();
	}, []);
    
    return (
        <View style = {styles.container}>
            <Text style={styles.containerHeading}>Trainees</Text>
            <ScrollView>
                <View style = {styles.innerContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Search here'
                />
                {/* <Image source = {require('../../../assets/icons/magnifying.png')}/> */}
                    <FlatList
                        data = {AllTraineeList}
                        renderItem={({item}) => <TraineeCardComponent traineeName={item.traineeName} batchName={item.batchName}/>}
                        keyExtractor={item => item.id}
                    /> 
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#8518FF',
        height : '100%',
    },
    innerContainer : {
        backgroundColor : 'white',
        height : '100%',
        marginTop : '15%',
        borderTopStartRadius : 50,
        borderTopEndRadius : 50,
        paddingTop : '10%',
        paddingLeft : '10%',
        paddingRight : '10%',
    },
    containerHeading : {
        color : 'white',
        textAlign : 'center',
        fontSize : 50,
        marginTop : 80,
        fontFamily : 'Poppins-SemiBold',
    },
    input: {
        height: 30,
        marginBottom: 12,
        marginTop: 12,
        marginLeft: -12,
        marginRight : -12,
        // borderWidth: 1,
        borderRadius : 7,
        padding: 10,
        backgroundColor : '#E4D8FE',
        fontFamily : 'Poppins-Regular'
    },
})

export default Trainees;