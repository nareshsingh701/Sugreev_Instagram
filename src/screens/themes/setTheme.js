import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SetTheme = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.light}>Light</Text>
        <Image resizeMode={'cover'} style={styles.button} source={require('../../assets/images/round.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.light}>Dark</Text>
        <Image resizeMode={'cover'} style={styles.button} source={require('../../assets/images/round.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.light}>System default</Text>
        <Image resizeMode={'cover'} style={styles.button} source={require('../../assets/images/round.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default SetTheme;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25
    },
    light:{
        fontSize:20,
        color:'#000',

    },
    button:{
        height:33,
        width:33
    }
})