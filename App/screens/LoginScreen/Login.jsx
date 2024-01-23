import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import loginpic from "./../../../assets/images/login.jpg"
import React from 'react'
import Colors from '../Utils/Colors';

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
        <Image source={loginpic}
        style={styles.loginImage}
        
    />
        <View style={styles.subContainer}>

        <Text style={{fontSize:27,color:Colors.WHITE,textAlign:'center'}}>
            Let's Find <Text style={{fontWeight:'bold'}}>Professional Cleaning and repair</Text> Service
        </Text>

        <Text style={{fontSize:12,color:Colors.WHITE,textAlign:'center',marginTop:20}}>
            Best App to find services near you a professional service
        </Text>

        <TouchableOpacity style={styles.button} onPress={()=>console.log('hi')}>
            <Text style={{textAlign:'center',fontSize:17,color:Colors.PURPLE}}>Let's Get Started !</Text>
        </TouchableOpacity>

        </View>
    </View>

  )
}

const styles = StyleSheet.create({
 
    loginImage:{
        width:200,
        height:450,
        borderColor:Colors.BLACK,
        borderWidth:3,
        borderRadius:30,
        marginTop:90
    },
    subContainer:{
        width:'100%',
        height:'70%',
        backgroundColor:Colors.PURPLE,
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40
    }

});
