import { View, Text,StyleSheet,Image,TextInput } from 'react-native'
import React from 'react'

const AddYourBirthday = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image resizeMode={'cover'}style={styles.image}source={require('../../assets/images/birthday.png')}/>
      </View>
      <View style={styles.viewOne}>
        <Text style={styles.text}>Add your birthday</Text>
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.textOne}>This won`t be part of your public profile.</Text>
        <Text style={styles.textTwo}>Why do I need to provide my birthday?</Text>
      </View>
      <View style={styles.viewThree}>
        <TextInput placeholder='' />
      </View>
    </View>
  )
}

export default AddYourBirthday;
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    view:{
        alignSelf:'center',
        marginTop:25,
    },
    image:{
        height:70,
        width:70
    },
    viewOne:{
        alignSelf:'center',
        marginTop:15
    },
    text:{
        fontSize:25,
        color:'#000'
    },
    viewTwo:{
        alignSelf:'center',
        marginTop:10
    },
    textOne:{
    fontSize:16,
    fontWeight:'400',
    color:'#1a0000'    
    },
    textTwo:{
        fontSize:16,
        fontWeight:'400',
        marginLeft:5,
        color:'#001a66'
    },
    viewThree:{
        height:50,
        width:300,
        borderWidth:0.5,
        alignSelf:'center',
        borderRadius:5,
        marginTop:25,
        borderColor:'gray'
    }
})