import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CloseFriends = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.weDont}>We don't send notifications when you edit your close friends list. <Text style={styles.how}>How it works</Text></Text>
    </View>
  )
}

export default CloseFriends;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    weDont:{
      fontSize:18,
      marginHorizontal:50,
      textAlign:'center'
    },
    how:{
      fontSize:18,
      color:'#000'
    }
})