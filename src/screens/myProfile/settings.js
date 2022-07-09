import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'

const Settings = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewSearch}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageSearch} source={require('../../assets/images/search.png.png')} />
            <TextInput style={styles.textInput}
              placeholderTextColor={'#666666'}
              placeholder='Search'
            />
          </View>
        </View>

        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/userFollow.png')} />
          <Text style={styles.textFollow}>Follow and invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/notification.png')} />
          <Text style={styles.textFollow}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/lockSmall.png')} />
          <Text style={styles.textFollow}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/security.png')} />
          <Text style={styles.textFollow}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/userFollow.png')} />
          <Text style={styles.textFollow}>Ads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/account.png')} />
          <Text style={styles.textFollow}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/helps.png')} />
          <Text style={styles.textFollow}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/about.png')} />
          <Text style={styles.textFollow}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/themes.png')} />
          <Text style={styles.textFollow}>Theme</Text>
        </TouchableOpacity>
        <View style={styles.viewMeta}>
          <Image resizeMode={'cover'} style={styles.imageMeta} source={require('../../assets/images/metaIcon.png')} />
          <Text style={styles.textMeta}>Meta</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.textCenter}>Account Center</Text>
        </TouchableOpacity>
        <Text style={styles.textTitle}>Control settings for connected experiences across Instagram,the Facebook app and Messenger,including story and post  sharing and logging in.</Text>
        <Text style={styles.textLogin}>Logins</Text>
        <TouchableOpacity>
          <Text style={styles.addAccount}>Add account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.addAccount}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }}
      >
        <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1 }}>
          <View style={styles.viewMain}>
            <View style={styles.viewModal}>
              <View style={styles.viewInstagram}>
                <Text style={styles.textInstagram}>Log out of</Text>
                <Text style={styles.textInstagram}>Instagram?</Text>
              </View>
              <View style={styles.viewLine}>

              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 60
  },
  viewSearch: {
    height: 42,
    width: '100%',
    backgroundColor: '#e6e6e6',
    marginTop: 20,
    borderRadius: 10
  },
  viewRow: {
    flexDirection: 'row'
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10
  },
  imageSearch: {
    height: 22,
    width: 22,
    marginTop: 8,
    marginLeft: 15
  },
  follow: {
    flexDirection: 'row',
    marginTop: 20
  },
  imageFollow: {
    height: 30,
    width: 30
  },
  textFollow: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',

  },
  viewMeta: {
    flexDirection: 'row',
    marginTop: 30
  },
  imageMeta: {
    height: 25,
    width: 25,
    marginTop: 1
  },
  textMeta: {
    fontSize: 20,
    color: '#000',
    marginLeft: 5
  },
  textCenter: {
    fontSize: 20,
    color: '#0081fb',
    marginTop: 10
  },
  textTitle: {
    fontSize: 18,
    color: '#808080',
    lineHeight: 25,
    marginTop: 10
  },
  textLogin: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    marginTop: 30
  },
  addAccount: {
    fontSize: 20,
    color: '#0081fb',
    marginTop: 20
  },
  viewModal: {
    height: '35%',
    width: '75%',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  viewMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  textInstagram: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  viewInstagram: {
    marginTop: 25
  },
  viewLine:{
    width:'100%',
    borderTopWidth:1
  }
})