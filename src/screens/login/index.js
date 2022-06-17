import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const data = [
    { icon: require('../../assets/images/hide.png') },
    { image: require('../../assets/images/eye.png') }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.viewTwelve}>
        <View>
          <TouchableOpacity onPress={()=>props.navigation.navigate('languageList')}>
        <Text style={styles.textNine}>English (United States)</Text>
        </TouchableOpacity>
        </View>
        <View>
        <Image resizeMode={'cover'}style={styles.imageThree}source={require('../../assets/images/list.png')}/>
      </View>
      </View>
       <View style={styles.view}>
        <Text style={styles.textOne}>Instagram</Text>

      </View>
      <View style={styles.viewOne} >
        <TextInput style={styles.textInput}
          placeholder='Phone number,email or username'
        />
      </View>

      <View style={styles.viewTwo}>

        <TextInput
          style={styles.textInputOne}
          secureTextEntry={true}
          placeholder='Password'

        />
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageOne} source={require('../../assets/images/hide.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageOne} source={require('../../assets/images/eye.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTree}>
        <TouchableOpacity>
          <Text style={styles.textTwo}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewfour}>
        <Text style={styles.textTree}>Forgot your login details?</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('loginHelp')}>
          <Text style={styles.textFour}>Get help logging in.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewSeven}>
        <View style={styles.viewFive}>
        </View>
        <View style={styles.viewEight}>
          <Text style={styles.textFive}>OR</Text>
        </View>
        <View style={styles.viewFive}>
        </View>
      </View>
      <View style={styles.viewNine}>
        <View>
          <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/facebook.png')} />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.textSix}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewTen}>
      </View>
      <View style={styles.viewEleven}>
        <View>
          <Text style={styles.textSeven}>Dont have an account?</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
        <Text style={styles.textEight}>Sign up.</Text>
        </TouchableOpacity> 
        </View>
      </View>
    </View>
  )
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  

  },
  textOne: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 100,
    marginLeft: 110
  },
  textInput: {
    height: 50,
    width: 330,
    borderWidth: 1,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 7,
    fontSize: 15,
    marginTop: 20
  },
  imageOne: {
    height: 20,
    width: 20,
    marginTop: 15,
    marginLeft: 180
  },
  viewTwo: {
    flexDirection: 'row',
    height: 50,
    width: 330,
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 15,
    marginLeft: 32
  },
  textInputOne: {
    marginLeft: 7,
  },
  viewTree: {
    height: 50,
    width: 330,
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 7,
    marginLeft: 32
  },
  textTwo: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  },
  viewfour: {
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textTree: {
    fontSize: 15,
  },
  textFour: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5
  },
  viewFive: {
    width: 140,
    borderTopWidth: 1,
    marginTop: 12
  },
  viewSeven: {
    flexDirection: 'row',
    marginTop: 30,

    justifyContent: 'center'
  },
  textFive: {
    fontSize: 20,
    fontWeight: 'bold'

  },
  viewEight: {
    marginHorizontal: 7
  },
  viewNine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  textSix: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  viewTen: {
    borderBottomWidth: 0.6,
    marginTop: 100
  },
  viewEleven:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:20
  },
  textSeven:{
    fontSize:15
  },
  textEight:{
    fontSize:16,
    fontWeight:'bold',
    color:'#000',
    marginLeft:5
  },
  viewTwelve:{
  flexDirection:'row',
  alignSelf:'center'  
  },
  imageThree:{
    alignSelf:'center',
    marginTop:8,
    marginLeft:5
  },
  textNine:{
    fontSize:20
  }
})