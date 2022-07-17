import React from "react";
import {Text} from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";


export default function More({navigatio,AppState}){

    return(
        <View style={styles.test}>
            <Text>First step in CMON app</Text>
        </View>
    )

}


const styles = StyleSheet.create({


    test:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }


});