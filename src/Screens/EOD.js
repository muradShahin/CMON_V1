import React from "react";
import {Text,Dimensions} from "react-native";
import { StyleSheet,ScrollView ,Image} from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import Header2 from "./Header/Header2";
import  Constants  from "expo-constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useState,useEffect } from "react";

const {width, height } = Dimensions.get("window");

export default function EOD({navigation}){

   
    const [current_activity,setActivity] =useState({});
    const [listOrder,setOrder] = useState(true);
    const [gridOrder,setGrid] = useState(false);

  const testArr = [
    {
        id:1,
        date:'Monday 26',
        activities:[
            {
                act:55,
                isEnabled:false,
                sub_activites:[

                    {
                        sub_id:12,
                        parentAct:55
                    }
                ]
            },
            {
                act:2,
                isEnabled:false,
                sub_activites:[

                    {
                        sub_id:41,
                        parentAct:2
                    }
                ]
            }
        ]
    },
    {
        id:2,
        date:'Tuesday 27',
        activities:[
            {
                act:11,
               
                isEnabled:false,
                sub_activites:[

                    {
                        sub_id:99,
                        parentAct:11
                    }
                ]
            }
        ]
    },
    {
        id:3,
        date:'wednesday 27',
        activities:[
            {
                act:14,
               
                isEnabled:false,
                sub_activites:[

                    {
                        sub_id:234,
                        parentAct:14
                    }
                ]
            },
            {
                act:22,
            
                isEnabled:false,
                sub_activites:[

                    {
                        sub_id:2341,
                        parentAct:22
                    }
                ]
            },
            {
                act:35,
                
                isEnabled:false,
                sub_activites:[

                    {
                        sub_id:7412,
                        parentAct:35
                    }
                ]
            }
        ]
    },
  ]

  const typeOfOrder =(type)=>{
    if(type === 'list'){
     setOrder(true)
     setGrid(false)
    }else{
        setOrder(false)
        setGrid(true)
    }
 }

    return(
   
            <View style={styles.container}>
          
                <Header2 title={'EOD'} navigation={navigation}/>

                <View style={styles.tools_view}>

                    <View style={styles.tools_part1}>
                        <TouchableOpacity style={listOrder? styles.list_btn_clicked:styles.list_btn} onPress={()=>{
                            typeOfOrder('list')
                        }}>
                          {listOrderHandler(listOrder)}
                      </TouchableOpacity>
                       
                        <TouchableOpacity style={styles.grid_btn} onPress={()=>{
                            typeOfOrder('grid')
                        }}>
                         {handleGrid(gridOrder)}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.sort_btn}>
                         <FontAwesome5 name="sort" size={15} color={"#757575"} style={styles.tools_icons_1}/>
                    </TouchableOpacity>
                </View>
               
               {/** scroll view to handle each day with it's activity */}
                <View style={styles.eod_container}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                       {testArr.map(element => {
                       
                        return (
                            <View style={styles.widget}>
                                <View style={styles.internal_view}>
                                   
                                    <View style={styles.widget_header}>
                                        <Text style={styles.widget_txt}>{element.date}</Text>
                                        <View style={styles.line}></View>
                                    </View>
                                     {/** this block should be in loop */}
                                      {/** the view that holds the EOD activity info */}
                                      {element.activities.map(activity=>{

                                        
                                            return(
                                               <View style={styles.activities_holder}> 
                                                <View style={styles.activity_container}>
                                                        <View style={styles.activity_time_container}>
                                                            <Text>12:30</Text>
                                                            <Text>pm</Text>
                                                        </View>
            
                                                        <TouchableOpacity style={current_activity.isEnabled && current_activity.act == activity.act? styles.activity_row2 : styles.activity_row}
                                                         onPress={()=>{
                                                            activity.isEnabled=true;
                                                            setActivity(activity);
                                                         }}

                                                        >
                                                            <View style={styles.row_info}>
                                                            { renderCountryImage('JO')}
                                                            <View style={styles.activity_txt_container}>
                                                                <Text style={styles.row_info_txt}> CASHIER(2)</Text>
                                                                <Text style={styles.row_info_txt2}> 2 min</Text>   
                                                            </View>
                                                            </View>
                                                            
                                                        </TouchableOpacity>
                                                       
                                                        
                                                </View>
                                                {activity.sub_activites.map(item =>{
                                                    if(current_activity.isEnabled && current_activity.act == item.parentAct){
                                                        console.log(item.parentAct);
                                                        return onActivityClicked(current_activity,true)
                                                    }else{
                                                        return onActivityClicked({},false)
                                                    }
                                                })}
                                                </View>
                                            )


                                      })}
                                   
                                       {/** this block should be in loop */}
                                </View>
                             </View> );
                        
                       })} 
                        
                    </ScrollView>

                </View>
                {/** scroll view to handle each day with it's activity end */}


              
            </View>
            
         
    )

 



}


    

function onActivityClicked(activity,show){
    if(show){
            return(
            <View style={styles.clicked_view}> 
                    <View style={styles.children_activity}>
                        <Text style={styles.children_activity_txt}>activity info</Text>
                        <MaterialIcons style={styles.icon_l1} name={'keyboard-arrow-right'} size={20} color={'#bdbdbd'}/>
                    </View>
                    <View style={styles.children_activity_last}>
                        <Text style={styles.children_activity_txt}>activity info</Text>
                        <MaterialIcons style={styles.icon_l1} name={'keyboard-arrow-right'} size={20} color={'#bdbdbd'}/>
                    </View>
                </View>
            )
    }else{
        return(<View></View>)
    }
}

function onRowClicked(activity,show){
    
    {/**

     logic is unkown yet
    */}
}

function renderCountryImage(country){
    switch(country){
        case 'JO':
            return (<Image source={require('../img/jo_round.png')} style={styles.countries_img}/>)
        case 'EG':
            return (<Image source={require('../img/eg_round.png')} style={styles.countries_img}/>)
    }
}

function listOrderHandler(listorder){
    if(listorder){
      return <Ionicons  name="list" size={30} color={"#ffffff"} style={styles.tools_icons_1}/>
    }else if(!listorder){
      return <Ionicons  name="list-outline" size={30} color={"#29b6f6"} style={styles.tools_icons_1}/>
    }
}

function handleGrid(grid){
    if(grid){
        return <Ionicons  name="grid" size={30} color={"#29b6f6"} style={styles.tools_icons_1}/>
    }else{
        return <Ionicons  name="grid-outline" size={30} color={"#29b6f6"} style={styles.tools_icons_1}/>
    }
}





const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:'100%',
    alignItems:'center',
    backgroundColor:'#f5f5f5'
  
    },
    tools_view:{
        height:'8%',
        width:'85%',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        
        
    
    },tools_part1:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        
        flexDirection:'row'
    
    },tools_icons_1:{
        marginEnd:10,
        marginStart:10
   
    },
    eod_container:{
       
        height:'77%',
        width:'100%',
        justifyContent:'center',
        
        
        
    },
    widget:{
        width:'100%',
        
        padding:20,
        marginBottom:0,
       
       
    },
    internal_view:{
        width:'100%',
      
        
    
    },widget_header:{
        flexDirection:'row',
        width:'100%',
        alignContent:'center',
        justifyContent:'center',
        
        
        
    },
    widget_txt:{
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Arial',
       
   
    },line:{
        width:'60%',
        borderWidth:0,
        borderColor:'#1976d2',
        borderBottomWidth:1,
        marginStart:10
       
    },
    activity_container:{
        width:'100%',
        flexDirection:'row',
        marginTop:15
        
    },
    activity_time_container:{
        flexDirection:'column',
        alignItems:'flex-end',
        paddingTop:10
    
    },
    activity_row:{
        width:'85%',
        flexDirection:'row',
        height:60,
        backgroundColor:'red',
        marginStart:20,
        backgroundColor:'white',
        shadowColor: "#000",
        borderWidth:0.75,
        borderRadius:15,
        borderColor:"#d8d8d8",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    
    },
    activity_row2:{
        width:'85%',
        flexDirection:'row',
        height:60,
        backgroundColor:'red',
        marginStart:20,
        backgroundColor:'#bbdefb',
        shadowColor: "#000",
        borderWidth:0.75,
        borderRadius:15,
        borderBottomEndRadius:0,
        borderBottomStartRadius:0,
        borderColor:"#d8d8d8",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    
    },row_info:{
        flexDirection:'row',
        width:'97%',
        margin:5,
        alignItems:'center',
        justifyContent:'flex-start'

    },
    countries_img:{
        height:35,
        width:35,

    },
    row_info_txt:{
        color:'#102027',
        fontWeight:'bold'
    }, row_info_txt2:{
        color:'#102027',
        fontSize:12,
        
    },
    activity_txt_container:{
        width:'82%',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-between'
    },
    clicked_view:{
        width:'85%',
        flexDirection:'column',
        
        backgroundColor:'red',
        backgroundColor:'white',
        shadowColor: "#000",
        borderWidth:0.75,
        borderRadius:15,
        borderTopEndRadius:0,
        borderTopStartRadius:0,
        borderColor:"#d8d8d8",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
       
       
        
    },
    activities_holder:{
      
        alignItems:'flex-end',
        justifyContent:'flex-end',

    },
    children_activity:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'black',
        margin:6,
        justifyContent:'space-between'
    },
    children_activity_last:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:6,
    },
    children_activity_txt:{
        margin:5,
        color:'#494949',
        
    },sort_btn:{
        borderWidth:1,
        borderColor:'#757575',
        borderRadius:6,
        
    },grid_btn:{
        borderWidth:1,
        borderRadius:25,
        borderColor:'#ffffff',
        backgroundColor:'#ffffff',
        width:50,
        height:50,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        marginStart:10,
        
    },
    list_btn:{
        borderWidth:1,
        borderRadius:25,
        borderColor:'#ffffff',
        backgroundColor:'#ffffff',
        width:50,
        height:50,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        marginEnd:10
    },
    list_btn_clicked:{
        borderWidth:1,
        borderRadius:25,
        borderColor:'#29b6f6',
        backgroundColor:'#29b6f6',
        width:50,
        height:50,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        marginEnd:10
    }
  
  

});