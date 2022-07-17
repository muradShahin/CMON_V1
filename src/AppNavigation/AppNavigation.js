import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, View ,Dimensions,ScrollView, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
//screens 
import Home from '../Screens/Home';
import UserAction from '../Screens/UserAction';
import Modal from "react-native-modalbox";
import ATM from '../../src/Screens/TabBarScreen/Atm';
import CMGT from '../../src/Screens/TabBarScreen/CMGT';
import MajorIncidents from '../../src/Screens/MajorIncidents';
import More from '../Screens/More';
import Resolved from '../Screens/Resolved';
import EOD from '../Screens/EOD';
import Settings from '../Screens/Settings';

//atom for global state 
import { useAtom } from 'jotai';
import { modalVisibility ,modalAlert ,userActionVisibility} from "../GlobalState/atom";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const {width, height } = Dimensions.get("window");

const homeName='Home';
const userActionName='UserAction';
const more='More';


export default function AppNavigation(){


    const [userActionVis,setUserActionVis] = useAtom(userActionVisibility);

  function show(){
    console.log("Test");

  }

  function Tabs(){
    return <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName;
            let rn =route.name;

            if(rn == homeName){
                iconName = focused ? 'home' : 'home-outline'
                
            }else if(rn == userActionName){
              if(focused)
                return <Feather name='user' size={size} color={color}/> 
              else 
                return <Feather name='user' size={size} color={color}/> 
                 
            }else if(rn == more){
              iconName= focused ? 'list' : 'list-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>

    },headerShown:false
})}
>

<Tab.Screen name={homeName} component={Home}/>
<Tab.Screen name={userActionName} component={UserAction} />
<Tab.Screen name={more} component={More}
  listeners={()=>(
    {
      tabPress:event =>{
        event.preventDefault();
        setUserActionVis(true)
      }
    }
  )}
/>




</Tab.Navigator>
  }


    return(

        <NavigationContainer >
            
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Tabs"
            component={Tabs}
            options={{headerShown:false}}
            >

            </Stack.Screen>
            <Stack.Screen name="Home">
                {props => <Home {...props}  />}
            </Stack.Screen>
            <Stack.Screen name="ATM">
                {props => <ATM {...props}  />}
            </Stack.Screen>
            <Stack.Screen name="CMGT">
                {props => <CMGT {...props} />}
            </Stack.Screen>
            <Stack.Screen name="MajorIncidents">
                {props => <MajorIncidents {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Settings">
                {props => <Settings {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Resolved">
                {props => <Resolved {...props} />}
            </Stack.Screen>
            <Stack.Screen name="EOD">
                {props => <EOD {...props} />}
            </Stack.Screen>
            </Stack.Navigator>
      

        </NavigationContainer>



    )










}








