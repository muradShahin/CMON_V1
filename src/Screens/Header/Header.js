import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';



export default function Header(){


    return(

        <View style={styles.main}>
            
                    <View style={styles.header}>
                    
                        <Text style={styles.title}>Cmon</Text>
                    
                        <View style={styles.info}>
                                <View style={styles.info_row}>
                                    <Ionicons style={styles.icons} name="reload-circle-sharp" size={15} color={"#bdbdbd"}/>
                                    <Text style={styles.info_text}>Last Refresh 30 sec</Text>
                                </View>
                                <View style={styles.info_row}>
                                    <Ionicons style={styles.icons} name="md-warning-sharp" size={15} color={"#bdbdbd"}/>
                                    <Text style={styles.info_text}>Last Error 12 min</Text>
                                </View>
                                
                        </View>
                     
                    </View>
                    
                
                   
                   

        </View>
    )

}


const styles = StyleSheet.create({

    header:{
       flex:1.5,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
     
        
        
        elevation: 24,
    },
    title:{
       justifyContent:'flex-start',
        color:'grey',
        marginStart:20,
        fontSize:20,
        fontWeight:'bold' ,
        color:'#0077c2',
        marginBottom:10
    },
    info:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'flex-start',
        width:'40%',
        marginBottom:10
    },
    main:{
        flex:1.5,
        width:'100%',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
     
        
        
        elevation: 24,
   
    },icons:{
        marginEnd:4,
        marginStart:4
    
    },info_row:{
        flexDirection:"row"

    },
    info_text:{
        fontSize:10,
        color:'#9e9e9e',
        fontWeight:'bold'
    }
    
  


})