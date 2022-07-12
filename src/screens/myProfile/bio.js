import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Bio = (props) => {
  return (
    <View style={styles.container}>
         <View style={styles.viewMain}>
                <View style={styles.viewRow}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image resizeMode={'cover'} style={styles.imageCross} source={require('../../assets/images/cross.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textEdit}>Bio</Text>
                </View>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.imageCheck} source={require('../../assets/images/checkBig.png')} />
                </TouchableOpacity>
                
            </View>
            <TextInput style={styles.textInput}
            placeholderTextColor={'#666666'}
             placeholder='' 
            />
            <View style={styles.viewLine} />
    </View>
  )
}

export default Bio;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
viewRow: {
    flexDirection: 'row',
},
viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal:16
},
imageCross: {
    height: 35,
    width: 35
},
textEdit: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 30,
    color: '#000'
},
imageCheck: {
    height: 40,
    width: 65,
},
textInput:{
    fontSize:18,
    marginTop:15
},
viewLine:{
    height:0.4,
    width:'100%',
    backgroundColor:'#0081fb'
},
})