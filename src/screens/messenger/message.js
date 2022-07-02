import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <View style={styles.rowView}>
          <Image resizeMode={'cover'} style={styles.imageBack} source={require('../../assets/images/left.png.png')} />
        </View>
        <View style={styles.viewImage}>
          <Image resizeMode={'cover'} style={styles.imageVideo} source={require('../../assets/images/videoIcon.png')} />
          <Image resizeMode={'cover'} style={styles.imagePlus} source={require('../../assets/images/plusBlack.png')} />
        </View>
      </View>
    </View>
  )
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:16,
    marginTop:10
  },
  rowView:{
   // flexDirection:'row'
  },
  viewImage:{
    flexDirection:'row'
  },
  imageBack:{
    height:27,
    width:27,
    marginTop:3
  },
  imageVideo:{
    height:25,
    width:25,
    marginTop:7  
  },
  imagePlus:{
    height:40,
    width:40
  }
})