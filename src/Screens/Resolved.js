import {react} from "react";
import { StyleSheet ,ScrollView,View,TouchableOpacity,Text,Image,Dimensions} from "react-native";
import Header from "./Header/Header";
import  { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import { useAtom } from 'jotai';
import Constants from 'expo-constants';
import { StackActions } from '@react-navigation/native';
import {resolvedModalAlert} from '../GlobalState/atom';
import Modal from "react-native-modalbox";
import {modalAlert} from '../GlobalState/atom';
import Header2 from "./Header/Header2";


const {width, height } = Dimensions.get("window");

export default function Resolved({navigation}){
    const [alerts,setAlerts] = useState([{}]);
    const popAction = StackActions.pop(1);
    const [alertVis,setVisibiltyRes] = useAtom(resolvedModalAlert);
    const [alert,setAlert] = useAtom(modalAlert);

    useEffect(() => {
           
        
        setAlerts(getAlerts());
         
      }, []);

      function renderImageSevirity(severity){

        switch(severity){

            case 'critical':
                return <Ionicons style={styles.icon_l1} name={'md-warning-sharp'} size={20} color={'#e53935'}/>
            case 'mid':
                return <Foundation style={styles.icon_l1} name={'info'} size={20} color={'#ffca28'}/>


        }

    }

    function getAlerts(){

        return [
            {
                id:1,
                title:'CASHIER(2)',
                severity:'critical',
                time:'2 min',
                country:'JO',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:2,
                title:'CASHIER(2)',
                severity:'mid',
                time:'2 min',
                country:'JO',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:3,
                title:'Payments',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:4,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:5,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:6,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:7,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:8,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:9,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:10,
                title:'ATM',
                severity:'mid',
                time:'2 min',
                country:'EG',
                details:[{
                    detail:"(CASHIR_SRV) ISSAM YASSINE -LB00 -JDT07"
                }]
            },
            {
                id:11,
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


    function renderCountryImage(country){
        switch(country){
            case 'JO':
                return (<Image source={require('../img/jo_round.png')} style={styles.countries_img}/>)
            case 'EG':
                return (<Image source={require('../img/eg_round.png')} style={styles.countries_img}/>)
        }
    }


    const getModal = () =>{
        return (
          <Modal
            entry="bottom"
            backdropPressToClose={true}
            isOpen={alertVis}
            style={styles.modalBox}
            onClosed={() => setVisibiltyRes(false)}
            useNativeDriver={true}
          >
            <View style={styles.content}>
                <ScrollView style={styles.scrollView}>
                       {/** First Row - parent */}
                        <View style={styles.modalRow1}>
                                {/** child row 1 */}
                                <View style={styles.chid_row1}>
                                       {/* <Image source={require('../img/jo_round.png')} />*/}
                                       {renderCountryImage(alert.country)}
                                        <View style={styles.child_row1_child}>
                                             <Text style={styles.modal_text}>{alert.title}</Text>
                                             <Text style={styles.modal_text}>ID {alert.alertId}</Text>
                                        </View>                    
                                </View>
                                {/** child row 2 */}
                                <View style={styles.child_row2}>
                                     <Foundation  name={'info'} size={30} color={'#fdd835'}/>
                                    <Text style={styles.child_row2_text}>Warning</Text>
                               </View>
                        </View>
                        
                         {/** Second_row_2 */}
                         <View style={styles.second_row_2}>
                                <Text style={styles.second_row_2_txt}>Started</Text>
                                <Text style={styles.second_row_2_txt_2}>14-04-2022 04:32:01</Text>
                         </View>

                         {/** 3rd Row 3 */}
                         <View style={styles.third_row_3}>
                                    <View style={styles.third_row_3_child}>
                                         <Text style={styles.second_row_2_txt}>System</Text>
                                         <Text style={styles.rows_txt_other}>CLOUDERA</Text>
                                    </View>

                                    <View style={styles.third_row_3_child}>
                                         <Text style={styles.second_row_2_txt}>Task Type</Text>
                                         <Text style={styles.rows_txt_other}>OS</Text>
                                    </View>
                         </View>
                        
                        {/** 4th Row 4 */}
                         <View style={styles.second_row_2}>
                                <Text style={styles.second_row_2_txt}>Category</Text>
                                <Text style={styles.rows_txt_other}>Infrastructure</Text>
                         </View>

                        {/** 5th Row 5 */}
                        <View style={styles.modalLastRow}>
                                <Text style={styles.second_row_2_txt}>Description</Text>
                                <Text style={styles.rows_txt_other}>Text</Text>
                        </View>
                       
                </ScrollView>
            </View>
          </Modal>
        ); 
    };

    return(
        <View style={styles.main_res}>
            {/* <Header/> */}
            {/* {ResolvedHeader()} */}
            <Header2 title={'Resolved'} navigation={navigation}/>

            {/** alerts counter View */}
            <View style={styles.counter_view}>
                {/** warnings alerts */}
                 <View style={styles.view_counts}>
                        <Ionicons style={styles.icon_check} name={'md-information-circle'} size={20} color={'#ffd54f'} />
                        <Text>0</Text>
                 </View>

                {/** ciritical alerts */}
                <View style={styles.view_counts}>
                    <Ionicons style={styles.icon_check} name={'md-warning-sharp'} size={20} color={'#e53935'} />
                    <Text>0</Text>
                </View>
            </View>
            <View style={styles.alerts_exist_view}>
                                <ScrollView  style={styles.scrollView} showsVerticalScrollIndicator={false}>
                                    {alerts.map(alert=>{
                                        
                                        return (
                                            <TouchableOpacity key={alert.id} 
                                                            onPress={()=>{
                                                                setVisibiltyRes(true);
                                                                setAlert(
                                                                    alert
                                                                );
                                                                
                                                         }}
                                            >
                                                <View  
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
                {getModal()}

        </View>




    );


  

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
    
    
    },alerts_exist_view:{
        width:'100%',
        height:'80%',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        marginStart:0,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    
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
    },
    header:{
         height:'100%',
         width:'100%',
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         backgroundColor:'white',
       
         
   
     },
     title:{
        justifyContent:'flex-start',
         color:'grey',
         fontSize:20,
         fontWeight:'bold' ,
         color:'#0077c2',
        
     },
     info:{
         justifyContent:'center',
         flexDirection:'column',
         alignItems:'flex-start',
         width:'40%',
        
     }
     ,icons:{
         marginEnd:4,
         marginStart:4
     
     },info_row:{
         flexDirection:"row"
 
     },
     header_first_row:{
        flexDirection:'row',
        marginStart:10,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    
    },counter_view:{
        width:'93%',
        height:'4%',
        marginStart:10,
        marginEnd:10,
        marginTop:6,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row'
    
    },
    view_counts:{
        width:'15%',
        height:'100%',
        flexDirection:'row',
        marginStart:15,
        marginEnd:15,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
     
    },
    modalBox: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        height:height,
        width,
        backgroundColor:'transparent'
      },
      content: {
        position: "absolute",
        bottom: 0,
        width,
        height: '65%',
        borderTopLeftRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 20,
        backgroundColor:'white'
       
      
    
    },scrollView:{
        width:'100%',
     
    },
    modalRow1:{
        width:'90%',
        height:80,
        margin:10,
        flexDirection:'row',
        borderBottomWidth:2,
        borderBottomColor:'#bbdefb'
    
    },
    chid_row1:{
        width:'40%',
        margin:20,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        borderEndWidth:2,
        borderEndColor:'#bbdefb',

        
    },child_row1_child:{


        flexDirection:'column',
        alignContent:'center',
        alignContent:'center',
        justifyContent:'center',
        marginEnd:10,
        marginStart:10,
    
    
    },modal_text:{

        fontSize:13,
        fontWeight:'bold',
        color:'black',
        padding:4

    },child_row2:{

        width:'40%',
        margin:20,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    
    },child_row2_text:{
        fontSize:18,
        padding:6,
        fontWeight:'bold'
   
    },second_row_2:{
        width:'90%',
        height:60,
        margin:10,
        marginTop:0,
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderBottomWidth:2,
        borderBottomColor:'#bbdefb'
    },second_row_2_txt:{
        fontSize:12,
        color:'#bdbdbd',
        fontWeight:'bold',
        padding:5

    },second_row_2_txt_2:{
        fontSize:12,
        color:'#1b1b1b',
        fontWeight:'bold',
        padding:5
    
    },third_row_3:{
        width:'90%',
        height:60,
        flexDirection:'row',
        margin:10,
        marginTop:0,
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderBottomWidth:2,
        borderBottomColor:'#bbdefb',
    
    },third_row_3_child:{
        width:'50%',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'flex-start',
        justifyContent:'center',

    },rows_txt_other:{
        fontSize:14,
        color:'#1b1b1b',
        fontWeight:'bold',
        padding:5

    },modalLastRow:{
        width:'90%',
        height:60,
        margin:10,
        marginTop:0,
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    main_res:{
        backgroundColor:'#f5f5f5'
    }



});