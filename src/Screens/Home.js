import React from "react";
import {ScrollView, Text, View,Image} from "react-native";
import { StyleSheet } from "react-native";

//header section
import Header from "./Header/Header";

//import constans from expo constans
import  Constants  from "expo-constants";


//tab bar


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Alerts from '../Screens/TabBarScreen/Alerts';
import MB from '../Screens/TabBarScreen/MB';
import CMGT from '../Screens/TabBarScreen/CMGT';
import Atm from '../Screens/TabBarScreen/Atm';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const Tab = createMaterialTopTabNavigator();






export default function Home({navigation,AppState}){

    return(
      
        <View style={styles.container}>
            <Header/>
           
            <View style={styles.tabView}>
                            <Tab.Navigator screenOptions={({ route }) => ({
                                        tabBarIcon: ({ focused, color, size }) => {
                                            let iconName;

                                            iconName = focused ? 'checkmark-done' : 'checkmark-done-outline';
                                            return <Ionicons style={styles.icon} name={iconName} size={20} color={'#80e27e'} />;
                                        },
                                        tabBarActiveTintColor: 'black',
                                        tabBarInactiveTintColor: 'gray',
                                        })}>
                                <Tab.Screen name="Alerts" component={Alerts} />
                                <Tab.Screen name="MB" component={MB} />
                                <Tab.Screen name="ATM" component={Atm} />
                                <Tab.Screen name="CMGT" component={CMGT} />
                            </Tab.Navigator>
                </View>

            <View style={styles.body}>
             
               {/** today's summary */}
               <View style={styles.todays_summary}>

                    <Text style={styles.todays_summary_txt}>Today's Summary</Text>
                    <View style={styles.first_row}>
                                        
                            <View key={"resolved"} style={styles.resolvedView}>
                                  <Text style={styles.resolved_title}>Resolved</Text>
                                  <View key={"l1"} style={styles.resolved_l1}>
                                        

                                        {/** layer 2 - A */}
                                        <View style={styles.resolved_elements}>
                                            <Ionicons style={styles.icon_l1} name={'md-warning-sharp'} size={20} color={'#e53935'}/>
                                            <Text style={styles.txt_l1}>10</Text>
                                        </View>

                                        <View style={styles.resolved_elements}>
                                            <Foundation style={styles.icon_l1} name={'info'} size={20} color={'#fdd835'}/>
                                            <Text style={styles.txt_l1}>14</Text>
                                        </View>
                                  </View>


                            </View>
                            
                            <View key={"planned"} style={styles.planned_view}>
                                        <Text style={styles.planned_txt}>Planned</Text>

                                        <View style={styles.planned_v}>
                                            <Ionicons style={styles.icon_l1} name={'calendar'} size={20} color={'#0288d1'}/>
                                            <Text style={styles.planned_txt_1}>14</Text>
                                        </View>

                            </View>
                            
                            <View key={"unreachable"} style={styles.unreachable_View}>

                                    <Text style={styles.planned_txt}>Unreachable</Text>

                                    <View style={styles.planned_v}>
                                        <Feather style={styles.icon_l1} name={'phone-missed'} size={20} color={'#1b1b1b'}/>
                                        <Text style={styles.planned_txt_1}>14</Text>
                                    </View>

                            </View>
                            
                        

                            

                    </View>


                    {/** section 2 */}

                
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                  

                            <View style={styles.section2}>

                                <View key={"night_shift"} style={styles.section_2_2}>

                                        <Text style={styles.section_2_2_1_txt}>Night Shift</Text>

                                      {/** layer 2 - A */}
                                      <View style={styles.section_2_2_1}>
                                            <View style={styles.resolved_elements}>
                                                    <Ionicons style={styles.icon_l1} name={'md-warning-sharp'} size={20} color={'#e53935'}/>
                                                    <Text style={styles.txt_l1}>10</Text>
                                                </View>

                                                <View style={styles.resolved_elements}>
                                                    <Foundation style={styles.icon_l1} name={'info'} size={20} color={'#fdd835'}/>
                                                    <Text style={styles.txt_l1}>14</Text>
                                                </View>
                                     </View>

                                </View>

                                <View key={"hour"} style={styles.section_2_2}>

                                    <Text style={styles.section_2_2_1_txt}>1 hour</Text>

                                    {/** layer 2 - A */}
                                    <View style={styles.section_2_2_1}>
                                        <View style={styles.resolved_elements}>
                                                <Ionicons style={styles.icon_l1} name={'md-warning-sharp'} size={20} color={'#e53935'}/>
                                                <Text style={styles.txt_l1}>6</Text>
                                            </View>

                                            <View style={styles.resolved_elements}>
                                                <Foundation style={styles.icon_l1} name={'info'} size={20} color={'#fdd835'}/>
                                                <Text style={styles.txt_l1}>10</Text>
                                            </View>
                                    </View>

                                </View>

                              

                                <View key={"min"} style={styles.section_2_2}>

                                                <Text style={styles.section_2_2_1_txt}>5 min</Text>

                                                {/** layer 2 - A */}
                                                <View style={styles.section_2_2_1}>
                                                    <View style={styles.resolved_elements}>
                                                            <Ionicons style={styles.icon_l1} name={'md-warning-sharp'} size={20} color={'#e53935'}/>
                                                            <Text style={styles.txt_l1}>6</Text>
                                                        </View>

                                                        <View style={styles.resolved_elements}>
                                                            <Foundation style={styles.icon_l1} name={'info'} size={20} color={'#fdd835'}/>
                                                            <Text style={styles.txt_l1}>10</Text>
                                                        </View>
                                                </View>

                                </View>

                                <View key={"Rep"} style={styles.section_2_2}>

                                            <Text style={styles.section_2_2_1_txt}>Rep</Text>

                                            {/** layer 2 - A */}
                                            <View style={styles.section_2_2_1}>
                                                <View style={styles.resolved_elements}>
                                                        <Ionicons style={styles.icon_l1} name={'md-warning-sharp'} size={20} color={'#e53935'}/>
                                                        <Text style={styles.txt_l1}>6</Text>
                                                    </View>

                                                    <View style={styles.resolved_elements}>
                                                        <Foundation style={styles.icon_l1} name={'info'} size={20} color={'#fdd835'}/>
                                                        <Text style={styles.txt_l1}>10</Text>
                                                    </View>
                                            </View>

                                </View>


                                

                        </View>



                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={styles.horiz_view}>

                                    
                                     {/** countries */}

                                     <View style={styles.country_item}>
                                        <Image source={require('../img/jordan_icon.png')} style={styles.countries_img} />
                                        
                                        <View style={styles.country_inside}>
                                                <Text style={styles.country_name}>Jordan</Text>
                                                <View style={styles.country_inside_2}>
                                                    <View style={styles.country_stat_icon} backgroundColor={"#fdd835"}/>
                                                    <View style={styles.country_stat_icon} backgroundColor={"#b71c1c"}/>
                                                </View>
                                        </View>
                                     </View>

                                     <View style={styles.country_item}>
                                        <Image source={require('../img/palestine.png')} style={styles.countries_img} />
                                        
                                        <View style={styles.country_inside}>
                                                <Text style={styles.country_name}>Palestine</Text>
                                                <View style={styles.country_inside_2}>
                                                    <View style={styles.country_stat_icon} backgroundColor={"#fdd835"}/>
                                                    {/* <View style={styles.country_stat_icon} backgroundColor={"#b71c1c"}/> */}
                                                </View>
                                        </View>
                                     </View>

                                     <View style={styles.country_item}>
                                        <Image source={require('../img/egypt.png')} style={styles.countries_img} />
                                        
                                        <View style={styles.country_inside}>
                                                <Text style={styles.country_name}>Egypt</Text>
                                                <View style={styles.country_inside_2}>
                                                    <View style={styles.country_stat_icon} backgroundColor={"#fdd835"}/>
                                                    <View style={styles.country_stat_icon} backgroundColor={"#b71c1c"}/>
                                                </View>
                                        </View>
                                     </View>

                                     <View style={styles.country_item}>
                                        <Image source={require('../img/lebanon.png')} style={styles.countries_img} />
                                        
                                        <View style={styles.country_inside}>
                                                <Text style={styles.country_name}>Lebanon</Text>
                                                <View style={styles.country_inside_2}>
                                                    <View style={styles.country_stat_icon} backgroundColor={"#fdd835"}/>
                                                    <View style={styles.country_stat_icon} backgroundColor={"#b71c1c"}/>
                                                </View>
                                        </View>
                                     </View>


                                </View>
                    </ScrollView>



                  </ScrollView>




               </View>
         

            </View>

        </View>
 
    )

}


const styles = StyleSheet.create({


    test:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    },
    body:{
        flex:8,
        width:'100%',
        alignItems:'center',
        
    }, 
    tabView:{
       flex:12,
        flexDirection:'row',
        
    },
    icon:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    todays_summary:{
        
        width:'90%',
        height:'100%'
    
    },todays_summary_txt:{
        fontSize:17,
        color:'#1b1b1b'

    
    },first_row:{
        flexDirection:'row',
        width:'100%',
        height:'38%',
        paddingTop:10
    
    },resolvedView:{
        flexDirection:'column',
        width:'50%',
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
        marginEnd:10,
        
    
    },planned_view:{
        flexDirection:'column',
        width:'22%',
        alignItems:'center',
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
        padding:10,
        marginEnd:10
    },unreachable_View:{
        flexDirection:'column',
        alignItems:'center',
        width:'22%',
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
        padding:10,
        marginEnd:10
    
    },resolved_l1:{
        flexDirection:'row',
        padding:10

    },resolved_title:{
        fontSize:10,
        color:'black',
        fontWeight:'bold',
        paddingTop:10,
        paddingStart:10
    
    },layer2_a:{
        flexDirection:'column'
    
    },resolved_elements:{
        alignContent:'center',
        alignItems:'center',
        width:'50%',
        justifyContent:'space-between',
       
    
    },icon_l1:{
        paddingBottom:8,
    
    },txt_l1:{

        fontSize:11,
        fontWeight:'bold'

    },planned_v:{
    
        flexDirection:'column',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        paddingTop:10
    
    },planned_txt:{

        fontSize:8,
        fontWeight:'bold'
       
    },
    planned_txt_1:{

        fontSize:10,
        fontWeight:'bold'
       
    },section2:{
        flexDirection:'row',
        // height:'100%',
        marginTop:6,
        alignContent:'center',
        justifyContent:'center',
        paddingEnd:0,
        paddingStart:5,
        paddingBottom:10
    
    },section_2_2:{
        flexDirection:'column',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-between',
        width:'24%',
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
        padding:5,
        marginEnd:5

    },scrollView:{
        width:'100%',
     
    },section_2_2_1:{
        flexDirection:'row'

    },section_2_2_1_txt:{
        fontSize:11,
        fontWeight:'700',
        color:'#1b1b1b'
    },scrollView_h:{
        width:'100%',
        height:'10%',
        backgroundColor:'red'
    
    },horiz_view:{

        flexDirection:'row',
        padding:5
        
    },country_item:{
        flexDirection:'row',
        backgroundColor:'#1e88e5',
        width:120,
        height:45,
        borderRadius:40,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginEnd:10

    },country_inside:{
        flexDirection:'column',
        marginTop:10,
        padding:10
       
    
    },country_inside_2:{
        flexDirection:'row',
        justifyContent:'flex-end',
        
   
    },countries_img:{
        height:12,
        width:23
    },country_name:{
        fontSize:12,
        color:'white'

    },country_stat_icon:{
        margin:1,
        borderWidth:1,
        height:10,
        width:10,
        borderRadius:5,
        borderColor:'white'

    }
    


});