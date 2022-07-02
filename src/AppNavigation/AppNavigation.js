import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
//screens 
import Home from '../Screens/Home';
import UserAction from '../Screens/UserAction';
import Test from '../Screens/test';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const homeName='Home';
const userActionName='UserAction';
const test='Test';



export default function AppNavigation(){

    return(

        <NavigationContainer >
            <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({route})=>({
                        tabBarIcon:({focused,color,size})=>{
                            let iconName;
                            let rn =route.name;

                            if(rn == homeName){
                                iconName = focused ? 'home' : 'home-outline'
                            }else if(rn == userActionName){
                                iconName= focused ? 'list' : 'list-outline'
                            }

                            return <Ionicons name={iconName} size={size} color={color}/>

                    },headerShown:false
                })}
                >

                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={userActionName} component={UserAction}/>
          


            </Tab.Navigator>
       

        </NavigationContainer>


    )




}