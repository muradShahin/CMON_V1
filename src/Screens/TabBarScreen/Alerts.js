import React from "react";
import {Text,ScrollView, Image} from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import { useAtom } from 'jotai';
import { modalVisibility,modalAlert} from '../../GlobalState/atom';

import  { useState, useEffect } from 'react';

export default function Alerts({navigatio,AppState}){

    const [alerts,setAlerts] = useState([{}]);
    const [alertsCount,setCount] = useState(0);
   
    const[alert,setAlert] = useAtom(modalAlert);
    const[modalVis,setVisibilty]=useAtom(modalVisibility);
   

  //  const {width, height } = Dimensions.get("window");

    useEffect(() => {
           
          setCount(getAlertsCount());
          setAlerts(getAlerts());
           console.log(alertsCount)
        }, [])


    function getAlerts(){

        return [
            {
                id:1421,
                title:'CASHIER(2)',
                severity:'critical',
                time:'2 min',
                country:'JO',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:4202,
                title:'CASHIER(2)',
                severity:'mid',
                time:'2 min',
                country:'JO',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:1273,
                title:'Payments',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:4088,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            }
            ];
    }

    function getAlertsCount(){

        return 3;
    }


  


    function renderCountryImage(country){
        switch(country){
            case 'JO':
                return (<Image source={require('../../img/jo_round.png')} style={styles.countries_img}/>)
            case 'EG':
                return (<Image source={require('../../img/eg_round.png')} style={styles.countries_img}/>)
        }
    }


    function renderImageSevirity(severity){

        switch(severity){

            case 'critical':
                return <Ionicons style={styles.icon_l1} name={'md-warning-sharp'} size={20} color={'#e53935'}/>
            case 'mid':
                return <Foundation style={styles.icon_l1} name={'info'} size={20} color={'#ffca28'}/>


        }

    }

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

              {alertsCount == 0 ? 
                    
                <View style={styles.smiling}>

                        <Fontisto style={styles.icon_check} name={'smiley'} size={70} color={'#4b830d'} />
                        <Text style={styles.no_alerts}>No Alerts {alertsCount}</Text>
                    

                </View> :   <View style={styles.alerts_exist_view}>
                                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                                    {alerts.map(alert=>{
                                        
                                        return (
                                            <TouchableOpacity key={alert.id} 
                                                            onPress={()=>{
                                                                setVisibilty(true);
                                                                setAlert({
                                                                    alertId:alert.id,
                                                                    country:alert.country,
                                                                    title:alert.title,
                                                                    time:alert.time,
                                                                    severity:alert.severity
                                                                })
                                                            }}
                                            >
                                                <View key={alert.id} 
                                                    style={alert.severity === 'critical' ? 
                                                    styles.alert_view_row : styles.alert_view_row2} 
                                                    
                                                    >
                                                    {renderCountryImage(alert.country)}
                                                    <Text style={styles.alert_row_title}>{alert.title}</Text>
                                                    <View style={styles.alert_row_last_part}>
                                                        <Text style={styles.alert_row_last_txt}>{alert.time}</Text>
                                                        {renderImageSevirity(alert.severity)}
                                                    </View>

                                                </View>
                                            </TouchableOpacity>
                                            
                                        )

                                    })}
                                    
                               </ScrollView>
                           </View>

                }
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
        marginStart:4,
        padding:4
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
    
    
    },alerts_exist_view:{
        width:'100%',
        height:'70%',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        padding:10,
        alignItems:'flex-start',
        justifyContent:'flex-start',
    
    },alert_view_row:{

        width:'100%',
        height:50,
        backgroundColor:'#ffa4a2',
        padding:10,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'flex-start'
        

    },alert_view_row2:{

        width:'100%',
        height:50,
        backgroundColor:'#ffecb3',
        padding:10,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'flex-start'
        

    },scrollView:{
        width:'100%',
     
    },countries_img:{
        height:30,
        width:30,

    },alert_row_title:{
        marginStart:20,
        color:'#1b1b1b',
        fontWeight:'bold',
        width:'65%'
    
    },alert_row_last_part:{
        flexDirection:'column',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        width:'15%',
        
    },alert_row_last_txt:{
        fontSize:11,
        color:'#424242'
    }



});