import React,{ useState } from "react";
import {Text,TextInput} from "react-native";
import { StyleSheet ,Dimensions,Image,StatusBar} from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
//icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Header2 from "./Header/Header2";
import { RadioButton } from 'react-native-paper';
import Constants from 'expo-constants';
import Modal from "react-native-modalbox";
import { useAtom } from 'jotai';
import { noteVis } from "../GlobalState/atom";

const {width, height } = Dimensions.get("window");





export default function UserAction({navigation,AppState}){
    const [value, setValue] = React.useState('Suppress');
    const [value_2, setValue_2] = React.useState('Planned');
    const [modalVis,setVisibilty] = useAtom(noteVis);
    const [text, onChangeText] = React.useState("");

    const getModal = () =>{
        return (
          <Modal
            entry="bottom"
            backdropPressToClose={true}
            isOpen={modalVis}
            style={styles.modalBox}
            onClosed={() => setVisibilty(false)}
            useNativeDriver={true}
            
          >
            <View style={styles.content_note}>
            
               <Text style={styles.note_modal_txt}>Add Note</Text>
               <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Write your note here"
                />
            </View>
          </Modal>
        ); 
    };


function markAs(value){
    
    if(value === 'Mark as'){

        return(
            <View style={styles.radio_group}>
                <RadioButton.Group  onValueChange={newValue => setValue_2(newValue)} value={value_2}>
                        <View style={styles.radio_item}>
                            <RadioButton.Android value="Planned" color="#007ac1"/>
                            <Text style={styles.label_radio} >Planned</Text> 
                        </View>

                        <View style={styles.radio_item}>
                            <RadioButton.Android value="majorIncidents" color="#007ac1"/>
                            <Text style={styles.label_radio} >Major Incidents</Text> 
                        </View>

                        <View style={styles.radio_item}>
                            <RadioButton.Android value="3rd party"  color="#007ac1"/>
                            <Text style={styles.label_radio}>3rd party</Text> 
                        </View>
                    {console.log(value)}
                </RadioButton.Group>
           </View>
        )
    
    }
}


function hold(value){
    
        if(value ==='Hold'){

        return( <View style={styles.hold_date}>
            
               
                        <FontAwesome5  name={'calendar-alt'} size={20} color={'#29b6f6'} style={styles.date_icon}/>
                        <Text style={styles.date_title}>Tell When:</Text>
                        <TextInput
                            style={styles.input2}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Dd/mm/yyyy"
                        />
                
            </View>

        );


        }
}


    return(
       
             <View style={styles.content}>
                <Header2 title={"User Action"} navigation={navigation}/>
               
                  <View style={styles.body}>
                       {/** First Row - parent */}
                        <View style={styles.modalRow1}>
                                {/** child row 1 */}
                                <View style={styles.chid_row1}>
                                       {/* <Image source={require('../img/jo_round.png')} />*/}
                                       {renderCountryImage('JO')}
                                        <View style={styles.child_row1_child}>
                                             <Text style={styles.modal_text}>CASHIER</Text>
                                             <Text style={styles.modal_text}>ID 2034</Text>
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
                                <Text style={styles.rows_txt_other}>Cloudera edge node-server log.</Text>
                        </View>

                        <TouchableOpacity style={styles.add_note} onPress={()=>{setVisibilty(true)}}>
                            
                                
                                    <SimpleLineIcons style={styles.note_icon} name={'note'} size={20} color={'#29b6f6'}/>
                                    <Text style={styles.note_txt}>Add note</Text>
                            
                            
                        </TouchableOpacity>
                        <View style={styles.UserAction_options}>

                               {/** headers */}
                               <View style={styles.header_action}>
                                    <Text style={styles.rows_txt_other}>User Actions</Text>
                                        <TouchableOpacity style={styles.cancel_btn} onPress={()=>{
                                            setValue('');
                                            setValue_2('');
                                        }}>
                                            <Feather style={styles.note_icon} name={'x'} size={20} color={'#000a12'}/>
                                            <Text style={styles.cancel_txt}>clear selection</Text>
                                        </TouchableOpacity>    
                            </View>

                            <View style={styles.radio_group}>
                            <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}>
                                    <View style={styles.radio_item}>
                                        <RadioButton.Android value="Suppress" color="#007ac1"/>
                                        <Text style={styles.label_radio}>Suppress</Text> 
                                    </View>

                                    <View style={styles.radio_item}>
                                        <RadioButton.Android value="Hold" color="#007ac1"/>
                                        <Text style={styles.label_radio}>Hold</Text> 
                                    </View>
                                    {hold(value)}

                                    <View style={styles.radio_item}>
                                        <RadioButton.Android value="Mark as"  color="#007ac1"/>
                                        <Text style={styles.label_radio}>Mark as</Text> 
                                    </View>
                                
                            </RadioButton.Group>
                            {markAs(value)}
                           </View>

                        </View>
                    </View>
                    {getModal()}
        </View>
        
    )

}

function renderCountryImage(country){
    switch(country){
        case 'JO':
            return (<Image source={require('../img/jo_round.png')} />)
        case 'EG':
            return (<Image source={require('../img/eg_round.png')}/>)
    }
}

const styles = StyleSheet.create({


    test:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    content: {
        width:'100%',
        height: '100%',
      
       
      
    
    },modalRow1:{
        width:'90%',
        height:80,
        flexDirection:'row',
        borderBottomWidth:2,
        borderBottomColor:'#e3f2fd'
    
    },chid_row1:{
        width:'40%',
        margin:20,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        
        borderEndWidth:2,
        borderEndColor:'#e3f2fd',

        
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
        borderBottomColor:'#e3f2fd'
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
        borderBottomColor:'#e3f2fd',
    
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
        padding:10

    },modalLastRow:{
        width:'90%',
        margin:10,
        marginTop:0,
        
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderBottomWidth:2,
        borderBottomColor:'#e3f2fd'
    },add_note:{
        flexDirection:'row',
        width:'90%',
        margin:10,
        marginTop:0,
        
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderBottomWidth:2,
        borderBottomColor:'#e3f2fd',
        alignItems:'center'
    },
      content2: {
        position: "absolute",
        bottom: 0,
        width,
        height: '40%',
        borderTopLeftRadius: 20,
        justifyContent:'flex-start',
        alignItems: "center",
        borderTopRightRadius: 20,
        backgroundColor:'#90caf9'
      
    
    },
    body:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fafafa',
        marginTop:4,
        alignItems:'center'
        
    },note_txt:{
        color:'#29b6f6',
        padding:10,
        fontWeight:'bold',
        textDecorationLine:'underline',
        fontSize:15
    
    },note_icon:{
     
        marginStart:40

    },UserAction_options:{
        width:'90%',
        marginTop:10

    },header_action:{

        flexDirection:'row',
        justifyContent:'space-between'
    
    },cancel_btn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
        
    },cancel_txt:{
        fontSize:12,
        color:'#000a12',
        textDecorationLine:'underline'
    
    },radio_group:{
      
       width:'80%',
        alignItems:'flex-start',
        alignContent:'center',
        justifyContent:'flex-start',
        marginStart:20,
        marginEnd:20,
        
    
    },radio_item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
  
    },
    label_radio:{
        width:250
    },modalBox: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        height:height,
        width,
        backgroundColor:'transparent'
      },
      content_note: {
        position: "absolute",
        bottom: 0,
        width,
        height: '65%',
        borderTopLeftRadius: 20,
        justifyContent: 'flex-start',
        alignItems: "center",
        borderTopRightRadius: 20,
        backgroundColor: "white",
        
      
    
    },
    note_modal_txt:{
        marginTop:10,
        fontSize:14,
        fontWeight:'bold',
        marginBottom:20
    },
    input: {
       width:'80%',
       marginTop:10,
       borderTopWidth:1,
       borderTopColor:'#bbdefb'
      },
      hold_date:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
       
        marginStart:0

      },
      input2: {
        
        marginTop:10,
        marginStart:5,
        borderBottomWidth:2,
        borderBottomColor:'#bbdefb',
        
        

       },
       date_icon:{
        marginStart:0,
        marginEnd:8
       },
       date_title:{
        marginEnd:8,
        fontWeight:'bold',
        fontSize:12
       }
       


});