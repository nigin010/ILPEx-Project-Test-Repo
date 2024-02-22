import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AssessmentCardComponent from "../../../components/AssessmentCardComponent";
import { getAllAssessmentsAPI } from "./AssessmentAPIHook";

const Assessment = () => {

    const [AllAssessmentsList, setAllAssessmentsList] = useState<any[]>([]);

    useEffect(() => {
        const getAssessments = async () => {
            try {
                const {contentResp, errorMessage} = await getAllAssessmentsAPI('v1/47ce7df5-4925-47ff-ad27-46ef628bf755',);
                setAllAssessmentsList(contentResp);
            } catch(error) {
                console.error('Error', error);
            }
        }
        getAssessments();
    }, []);
    
    return (
        <View style = {styles.container}>
            <Text style={styles.containerHeading}>Assessments</Text>
            <View style = {styles.innerContainer}>
                <FlatList
                    data = {AllAssessmentsList}
                    renderItem={({item}) => <AssessmentCardComponent assessmentName={item.assessmentName} batchName={item.batchName}/>}
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

export default Assessment;