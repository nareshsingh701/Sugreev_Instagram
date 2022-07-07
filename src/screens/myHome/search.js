import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Search = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Recent')}>
      <View style={styles.viewSearch}>
        <View style={styles.searchView}>
        <Image resizeMode={'cover'} style={styles.imageSearch} source={require('../../assets/images/search.png.png')} />
      <Text style={styles.textInput}>Search</Text>
        </View>
      </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  viewSearch: {
    height: 40,
    width: '100%',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginTop: 15
  },
  searchView:{
    flexDirection:'row',
    
  },
  imageSearch:{
    height:22,
    width:22,
    marginTop:9,
    marginLeft:15
  },
  textInput:{
    fontSize:20,
marginLeft:10,
marginTop:5,
color:'#4d4d4d',
fontWeight:'600'
  }
})