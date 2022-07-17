import {react} from "react";
import { StyleSheet ,ScrollView,View,TouchableOpacity,Text,Image,Dimensions} from "react-native";
import Header from "./Header/Header";
import  { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import { useAtom } from 'jotai';
import Constants from 'expo-constants';
import { StackActions } from '@react-navigation/native';
import {resolvedModalAlert} from '../GlobalState/atom';
import Modal from "react-native-modalbox";
import {modalAlert} from '../GlobalState/atom';
import Header2 from "./Header/Header2";


const {width, height } = Dimensions.get("window");



export default function Settings({navigation}){

    return(
        <View style={styles.body}>
            <Header2 navigation={navigation} title={'Settings'}/>

            <View style={styles.personal}>
                    
                    <Image source={require('../img/person.png')} style={styles.image}/>


                    <View style={styles.info}>
                        <Text style={styles.name}>Murad Shahin</Text>
                        <Text style={styles.username}>Murad-S</Text>
                        <Text style={styles.position}>Development Specialist</Text>
                    </View>
            </View>

       
            <View style={styles.row}>
            <View style={styles.row2}>
                 <MaterialIcons  name={'dashboard-customize'} size={30} color={'#007ac1'} style={styles.date_icon}/>
                 <Text style={styles.row_text}> Customize the Dashboard</Text>
                 </View>
            </View>
        

            <View style={styles.row}>
                <View style={styles.row2}>
                 <MaterialIcons  name={'notifications-none'} size={30} color={'#007ac1'} style={styles.date_icon}/>
                 <Text style={styles.row_text}>Notifications</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.row2}>
                    <MaterialCommunityIcons  name={'form-textbox-password'} size={30} color={'#007ac1'} style={styles.date_icon}/>
                    <Text style={styles.row_text}> Change Password</Text>
                    </View>
            </View>

            <View style={styles.row}>
                <View style={styles.row2}>
                    <Ionicons  name={'md-exit-outline'} size={30} color={'#007ac1'} style={styles.date_icon}/>
                    <Text style={styles.row_text}> Log out</Text>
                 </View>
            </View>


        </View>
    )
}



const styles = StyleSheet.create({


    body:{
        height:'100%'
    },
    personal:{
        height:'15%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd',

        
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#007ac1",
        
      },
      info:{
        flexDirection:'column',
        alignItems:'flex-start',
        alignContent:'center',
        justifyContent:'center',
        
      },
      name:{
        fontSize:16,
        fontWeight:'bold',
        color:'#212121'
      },
      username:{
        fontSize:12,
        fontWeight:'bold',
        color:'#007ac1'
      
    },
    position:{
        fontSize:12,
        fontWeight:'bold',
        color:'#757575'
    },
    row:{
         height:'8%',
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
   
    },row_text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#007ac1',
        marginStart:30
    
    },row2:{
        height:'100%',
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',

    }
});