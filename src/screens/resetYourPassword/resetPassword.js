import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'


const ResetPassword = ({route,props}) => {
  console.log("ResetPassword",route.params.userName.image)
 
   
  return (
    <ScrollView>
    <View style={styles.container}>
     
      <View>
        <Image resizeMode={'cover'}style={styles.imageOne}source={Image} />
      </View>
      <View style={styles.viewThree}>
        <Text style={styles.textFour}>{route.params.userName}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Choose a way to recover your Instagram account</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.textOne}>You`II need to confirm your identity so we can recover your account.If you don`t recognize any of this infromation,your account my have been compromised.We can help change it back after you secure your account.</Text>
      </View>
      <View style={styles.viewOne}/>
      <TouchableOpacity style={styles.viewTwo}>
        <Text style={styles.textTwo}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewThree}>
        <Text style={styles.textThree}>Try another way</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default ResetPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginLeft: 8
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#000'
  },
  view: {
    alignSelf: 'center'
  },
  textOne:{
    fontSize:16,
    marginTop:15,
    marginHorizontal:40,
  color:'#000'
  },
  viewOne:{
    width:'100%',
    borderWidth:0.2,
    marginTop:160,
    borderColor:'gray'
  },
  viewTwo:{
    height:50,
    width:330,
    backgroundColor:'#1a75ff',
    marginTop:16,
    borderRadius:5,
    alignSelf:'center'
  },
  textTwo:{
    fontSize:18,
    fontWeight:'600',
    color:'#fff',
    alignSelf:'center',
    marginTop:12
  },
  textThree:{
alignSelf:'center',
fontSize:16,
fontWeight:'600',
color:'#1a75ff',
marginTop:16
  },
  viewThree:{
    alignSelf:'center',
    marginBottom:30
  },
  textFour:{
    fontSize:16,
    fontWeight:'600',
    color:'#000'
  }

})