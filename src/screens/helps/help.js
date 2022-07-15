import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Help = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.row}>
        <Text style={styles.report}>Report a Problem</Text>
        <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
        <Text style={styles.report}>Help Center</Text>
        <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
        <Text style={styles.report}>Privacy and Security Help</Text>
        <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
        <Text style={styles.report}>Support Requests</Text>
        <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} /> 
        </TouchableOpacity>
    </View>
  )
}

export default Help;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    report:{
      fontSize:20,
      color:'#000'
    },
    imageMore:{
      marginTop:3
    }
})