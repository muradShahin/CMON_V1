import React from "react";
import {Text} from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";


export default function MB({navigatio,AppState}){

    return(
        <View style={styles.test}>
            <Text>CMGT</Text>
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