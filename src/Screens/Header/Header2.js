import React from "react";
import { StyleSheet, Text, View ,TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { StackActions } from "@react-navigation/native";
import Foundation from 'react-native-vector-icons/Foundation';


export default function Header2({navigation,title}){
   
    const popAction = StackActions.pop(1);

    function HandleNavigation(){
        if(title === 'User Action'){
            navigation.navigate('Home')
        }else{
            navigation.dispatch(popAction)
        }

    }

    return (
        <View style={styles.main}>
        
            <View style={styles.header}>
                <View style={styles.header_first_row}>
                    <TouchableOpacity key={'back_btn'} onPress={()=>{HandleNavigation()}}>  
                            <MaterialIcons name='arrow-back-ios' size={30} color={"#0077c2"} />
                    </TouchableOpacity> 
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.info}>
                        <View style={styles.info_row}>
                            <Ionicons style={styles.icons} name="reload-circle-sharp" size={15} color={"#6d6d6d"}/>
                            <Text style={styles.info_text}>Last Refresh 30 sec</Text>
                        </View>
                        <View style={styles.info_row}>
                            <Ionicons style={styles.icons} name="md-warning-sharp" size={15} color={"#6d6d6d"}/>
                            <Text style={styles.info_text}>Last Error 12 min</Text>
                        </View>
                        
                </View>
            
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    main:{
        height:'10%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white',
        shadowColor: "#aeaeae",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.00,
     
        
        
        elevation: 10,
        marginTop:Constants.statusBarHeight
   
    }, header:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
      
        
  
    },
    header_first_row:{
        flexDirection:'row',
        marginStart:10,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    
    },
    info:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'flex-start',
        width:'40%',
       
    },
    info_row:{
        flexDirection:"row"

    },
    info_text:{
        fontSize:10,
        color:'#6d6d6d',
        fontWeight:'bold'
    
    
   },
   icons:{
    marginEnd:4,
    marginStart:4

    },
    title:{
        justifyContent:'flex-start',
         color:'grey',
         fontSize:20,
         fontWeight:'bold' ,
         color:'#0077c2',
        
     }
});