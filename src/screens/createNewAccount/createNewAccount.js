import { StyleSheet, Text, View, Image, TouchableOpacity,Modal } from 'react-native'
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
          <TouchableOpacity>
            <Text style={styles.textCreate}>Create new account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
          <Text style={styles.logIn}>Log in</Text>
        </TouchableOpacity>
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
    marginBottom: 50
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
    borderRadius: 8,
    marginTop: 50
  },
  textCreate: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    marginTop: 11
  },
  logIn: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0081fb',
    marginTop: 25
  }
})