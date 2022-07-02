import React from "react";
import {Text} from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Alerts({navigatio,AppState}){

    return(
        <View style={styles.body}>

            <View style={styles.alertContainer}>

        {/* First Row in Alerts */}
                 <View style={styles.alerts1}>
                     
                     <View style={styles.part1_alert1}>
                        <Text style={styles.activeAlertsText}>Active Alerts</Text>
                        <Ionicons style={styles.icon_check} name={'md-checkmark-sharp'} size={15} color={'#80e27e'} />
                    </View>
                   
                    <View style={styles.part1_alert2}>
                            <Ionicons style={styles.icon_check} name={'md-warning-sharp'} size={20} color={'#e53935'} />
                            <Text style={styles.alertsRedColor}>0</Text>    
                    </View>

                    <View style={styles.part1_alert2}>
                            <Ionicons style={styles.icon_check} name={'md-information-circle'} size={20} color={'#fdd835'} />
                            <Text style={styles.alertsOrangeColor}>0</Text>    
                    </View>
                
             </View>

        {/* Second row in the alerts */}

                 <View style={styles.alert2}>
                        
                        <View style={styles.part2_alert_1}>
                                    <Ionicons style={styles.icon_check} name={'md-call-sharp'} size={20} color={'#76d275'} />
                                    <Text style={styles.alertsGreenColor}>0</Text>    
                            </View>

                            <View style={styles.part2_alert2}>
                                    <MaterialIcons style={styles.icon_check} name={'phone-missed'} size={20} color={'#e53935'} />
                                    <Text style={styles.alertsRedColor}>0</Text>    
                            </View>

                            <View style={styles.part2_alert3}>
                                    <MaterialIcons style={styles.icon_check} name={'phone-incoming'} size={20} color={'#0277bd'} />
                                    <Text style={styles.blueTextAlert}>0</Text>    
                            </View>
                            
                </View>

                {/* smiling face in case no alerts*/}
                <View style={styles.smiling}>

                    

                        <Fontisto style={styles.icon_check} name={'smiley'} size={70} color={'#4b830d'} />
                        <Text style={styles.no_alerts}>No Alerts</Text>
                    
                    

                </View>


            </View>
           
        </View>
    )

}


const styles = StyleSheet.create({


    body:{
        flex:1.5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },alertContainer:{
        
        width:'90%',
        height:'90%',
        alignItems:'flex-start',
        backgroundColor:'white',
        shadowColor: "#000",
        borderWidth:0.75,
        borderRadius:10,
        borderColor:"#d8d8d8",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        justifyContent:'flex-start'
    },alerts1:{
        backgroundColor:'white',
        flexDirection:'row',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        height:'15%',
        alignItems:'center',
        padding:10,
        width:'100%'

    },
    activeAlertsText:{
        fontSize:16,
        color:'black'

    },
    alert2:{
        backgroundColor:'#f5f5f5',
        flexDirection:'row',
        height:'15%',
        alignItems:'center',
        paddingEnd:30,
        paddingStart:30,
        width:'100%'


    },
    icon_check:{
        marginEnd:4,
        marginStart:4
    },
    part1_alert1:{
        flexDirection:'row',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        height:50,
        alignItems:'center',
        padding:10,
        width:'45%'

    },
    part1_alert2:{
        flexDirection:'row',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        height:50,
        alignItems:'center',
        padding:10,
        width:'30%'

    },
    alertsOrangeColor:{
        fontSize:16,
        color:'#fdd835'

    },
    alertsRedColor:{
        fontSize:16,
        color:'#e53935'

    },alertsGreenColor:{

        color:'#76d275'
    }
    ,
    part2_alert2:{
        flexDirection:'row',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        height:50,
        alignItems:'center',
        padding:10,
        width:'30%'

    },part2_alert3:{
        flexDirection:'row',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        height:50,
        alignItems:'center',
        padding:10,
        marginStart:10,
        width:'30%'

    },
    part2_alert_1:{
        flexDirection:'row',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        height:50,
        alignItems:'center',
        padding:10,
        width:'45%'

    },smiling:{
       
        backgroundColor:'#aee571',
        width:'100%',
        height:'70%',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
      

    },no_alerts:{
        color:'#4b830d',
        fontSize:16,
        marginTop:20,
        fontWeight:'bold'
    },blueTextAlert:{
        color:'#0277bd',
        fontSize:16
    }


});