import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal, Pressable,Linking } from 'react-native'
import React, { useState } from 'react'

const EditProfile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.viewMain}>
        <View style={styles.viewRow}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()} >
            <Image resizeMode={'cover'} style={styles.imageCross} source={require('../../assets/images/cross.png')} />
          </TouchableOpacity>
          <Text style={styles.textEdit}>Edit profile</Text>
        </View>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageCheck} source={require('../../assets/images/checkBig.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image resizeMode={'cover'} style={styles.imageAnshika} source={require('../../assets/images/Anshika.jpg')} />
        <Text style={styles.textChange}>Change profile photo</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }}
      >
        <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1 }}>
          <View style={styles.viewModalMain}>
            <View style={styles.viewModal}>
              <View style={styles.viewSmall} />
              <Text style={styles.textChangeProfile}>Change profile photo</Text>
              <View style={styles.viewLineTwo} />
              <Text style={styles.textNew}>New profile photo</Text>
              <Text style={styles.textNew}>Import from Facebook</Text>
              <Text style={styles.textRemove}>Remove profile photo</Text>
            </View>
          </View>
        </Pressable>
      </Modal>
      <View style={styles.viewPadding}>
        <TouchableOpacity>
          <Text style={styles.textAnshika}>Name</Text>
          <Text style={styles.textName}>Anshika Singh</Text>
        </TouchableOpacity>

        <View style={styles.viewLine} />
        <TouchableOpacity onPress={()=>props.navigation.navigate('UserName')}>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.textName}>anshikasingh12345</Text>
        </TouchableOpacity>
        <View style={styles.viewLine} />
        <TextInput style={styles.textInput}
          placeholderTextColor={'#666666'}
          placeholder='Website'
        />
        <View style={styles.viewLine} />
        <TouchableOpacity onPress={()=>props.navigation.navigate('Bio')}>
       <Text style={styles.textInputOne}>Bio</Text>
       </TouchableOpacity>
        <View style={styles.viewLineThree} />
      </View>
      <View style={styles.viewLineOne} />
      <Text style={styles.textSwitch}>Switch to professional account</Text>
      <View style={styles.viewLineTwo} />
      <Text style={styles.textSwitchOne}>Create avatar</Text>
      <View style={styles.viewLineTwo} />
      <Text style={styles.textSwitchOne}>Personal information settings</Text>
      <View style={styles.viewLineTwo} />
    </View>
  )
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10
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
  imageAnshika: {
    height: 90,
    width: 90,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15
  },
  textChange: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '400',
    marginTop: 10,
    color: '#0081fb'
  },
  viewPadding: {
    paddingHorizontal: 16,
    marginTop: 10
  },
  textName: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginTop: 10
  },
  viewLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#a6a6a6',
    marginTop: 5
  },
  viewLineThree: {
    height: 1,
    width: '100%',
    backgroundColor: '#a6a6a6',
    marginTop: 15
  },
  userName: {
    marginTop: 10,
    fontSize: 16,
    color: '#666666'
  },
  textAnshika: {
    fontSize: 16,
    color: '#666666'
  },
  textInput: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 15
  },
  textInputOne: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 25,
    color:'#666666'
  },
  viewLineOne: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#a6a6a6',
    marginTop: 20
  },
  textSwitch: {
    fontSize: 18,
    color: '#0081fb',
    margin: 10,
    marginLeft: 16
  },
  viewLineTwo: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#a6a6a6',

  },
  textSwitchOne: {
    fontSize: 18,
    color: '#0081fb',
    margin: 15,
    marginLeft: 16
  },
  viewModal: {
    height: 300,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  viewModalMain: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewSmall: {
    height: 4,
    width: 40,
    backgroundColor: '#666666',
    alignSelf: 'center',
    borderRadius: 2,
    marginTop: 10
  },
  textChangeProfile: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginTop: 15,
    margin: 16
  },
  textNew: {
    fontSize: 19,
    color: '#000',
    margin: 16
  },
  textRemove: {
    fontSize: 19,
    color: 'red',
    margin: 16
  }
})