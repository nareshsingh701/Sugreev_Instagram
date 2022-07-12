import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CreateNewAccount = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.english}>English (United States)</Text>
        <Image resizeMode={'cover'} style={styles.imageList} source={require('../../assets/images/list.png')} />
      </TouchableOpacity>
      <View style={styles.viewFlex}>
        <Text style={styles.instagram}>Instagram</Text>
        <View style={styles.viewMain}>
<Text>Create new account</Text>
        </View>
      </View>

    </View>
  )
}

export default CreateNewAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15
  },
  english: {
    fontSize: 18,
    color: '#666666'
  },
  imageList: {
    marginTop: 6,
    marginLeft: 5
  },
  viewFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70
  },
  instagram: {
    fontSize: 40,
    fontWeight: '600',
    color: '#000'
  },
  viewMain: {
    height: 50,
    width: '100%',
    backgroundColor: '#0081fb',
    borderRadius:8,
    marginTop:40
  }
})