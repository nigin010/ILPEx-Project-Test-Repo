import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BatchCardComponent from "../../../components/BatchCardComponent";
import { getAllBatchAPI } from "./BatchAPIHook";

const Batches = () => {

    const [AllBatchList, setAllBatchList] = useState<any[]>([]);

	useEffect(() => {
		const getBatches = async() => {
			try {
				const {contentResp, errorMessage} = await getAllBatchAPI('v1/5d1ee392-2aec-41bd-abaf-558fc8fc845b',);
				setAllBatchList(contentResp);
			} catch(error) {
				console.error('Error',error);
			}
		};
		getBatches();
	}, []);
    
    return (
        <View style = {styles.container}>
            <Text style={styles.containerHeading}>Batches</Text>
            <View style = {styles.innerContainer}>
                <FlatList
                    data = {AllBatchList}
                    renderItem={({item}) => <BatchCardComponent batchName={item.batchName} traineeNo={item.traineeNo} date={item.date} />}
                    keyExtractor={item => item.id}
                /> 
            </View>
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
    }
})

export default Batches;