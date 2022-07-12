import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Pressable, Modal, Linking } from 'react-native'
import React, { useState } from 'react'

const Settings = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOneVisible, setModalOneVisible] = useState(false);
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

        <TouchableOpacity onPress={() => props.navigation.navigate('FollowAndInviteFriends')}
          style={styles.follow} >
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/userFollow.png')} />
          <Text style={styles.textFollow}>Follow and invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/notification.png')} />
          <Text style={styles.textFollow}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Privacy')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/lockSmall.png')} />
          <Text style={styles.textFollow}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Security')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/security.png')} />
          <Text style={styles.textFollow}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Ads')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/userFollow.png')} />
          <Text style={styles.textFollow}>Ads</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Account')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/account.png')} />
          <Text style={styles.textFollow}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Help')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/helps.png')} />
          <Text style={styles.textFollow}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('About')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/about.png')} />
          <Text style={styles.textFollow}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('SetTheme')}
          style={styles.follow}>
          <Image resizeMode={'cover'} style={styles.imageFollow} source={require('../../assets/images/themes.png')} />
          <Text style={styles.textFollow}>Theme</Text>
        </TouchableOpacity>
        <View style={styles.viewMeta}>
          <Image resizeMode={'cover'} style={styles.imageMeta} source={require('../../assets/images/metaIcon.png')} />
          <Text style={styles.textMeta}>Meta</Text>
        </View>
        <TouchableOpacity onPress={() => setModalOneVisible(true)}>
          <Text style={styles.textCenter}>Account Center</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          visible={modalOneVisible}
          transparent={true}
          onRequestClose={() => {

            setModalOneVisible(!modalOneVisible);
          }}
        >
          <View style={styles.modalViewMain}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image resizeMode={'cover'} style={styles.imageCross} source={require('../../assets/images/cross.png')} />
              </TouchableOpacity>
              <View style={styles.metaRow}>
                <Image resizeMode={'cover'} style={styles.imageMeta} source={require('../../assets/images/metaIcon.png')} />
                <Text style={styles.textMeta}>Meta</Text>
              </View>
              <Text style={styles.accountCenter}>Accounts Center</Text>
              <Text style={styles.textManage}>Manage your connected experiences across Meta technologies like Facebook, Messenger and Instagram.<Text style={styles.learnMore} onPress={() => Linking.openURL('https://help.instagram.com/227486307449481/?ref=share')}>Learn more</Text></Text>
              <TouchableOpacity>
                <View style={styles.profiles}>
                  <View style={styles.modalViewRow}>
                    <View style={styles.viewRow}>
                      <Image resizeMode={'cover'} style={styles.imageAnshika} source={require('../../assets/images/Anshika.jpg')} />
                      <View style={styles.profileOne}>
                        <Text style={styles.textProfile}>Profiles</Text>
                        <Text style={styles.textAnshika}>Anshika Singh</Text>
                      </View>
                    </View>
                    <Image resizeMode={'cover'} style={styles.imageMoreThen} source={require('../../assets/images/moreThen.png')} />
                  </View>
                </View>
              </TouchableOpacity>
              <Text style={styles.manageText}>Manage connected experiences</Text>
              <View style={styles.viewSharing}>
                <TouchableOpacity style={styles.sharingView}>
                  <Text style={styles.textSharing}>Sharing across profiles</Text>
                  <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sharingView}>
                  <Text style={styles.textSharing}>Logging in with accounts</Text>
                  <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} />
                </TouchableOpacity>
              </View>
              <Text style={styles.manageText}>Account settings</Text>
              <View style={styles.viewMainAccount}>
              <TouchableOpacity style={styles.sharingView}>
                  <Text style={styles.textSharing}>Accounts</Text>
                  <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
        animationType="fade"
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
              <View style={styles.viewLine} />
              <TouchableOpacity onPress={()=>props.navigation.navigate('SwitchAccount')}>
                <Text style={styles.logOut}>Log out</Text>
              </TouchableOpacity>
              <View style={styles.viewLineOne} />
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
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
    height: '34%',
    width: '65%',
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
    marginTop: 15
  },
  viewLine: {
    width: '100%',
    height: 0.9,
    backgroundColor: '#a6a6a6',
    marginTop: 30
  },
  viewLineOne: {
    width: '100%',
    height: 0.9,
    backgroundColor: '#cccccc',
    marginTop: 15
  },
  logOut: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0081fb',
    textAlign: 'center',
    marginTop: 10
  },
  cancel: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginTop: 15
  },
  modalView: {
    height: '95%',
    width: '99%',
    backgroundColor: '#ccffff',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 16
  },
  modalViewMain: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 2,
  },
  imageCross: {
    marginTop: 25
  },
  metaRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  accountCenter: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5
  },
  textManage: {
    fontSize: 19,
    color: '#1a0000',
    lineHeight: 25,
    marginTop: 5
  },
  learnMore: {
    fontSize: 19,
    color: '#0081fb'
  },
  profiles: {
    height: 90,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 15
  },
  imageAnshika: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  modalViewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20
  },
  profileOne: {
    marginLeft: 10
  },
  textProfile: {
    fontSize: 18,
    color: '#000'
  },
  textAnshika: {
    fontSize: 16,
    color: '#666666'
  },
  imageMoreThen: {
    marginTop: 15
  },
  manageText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '500',
    marginTop: 15
  },
  viewSharing: {
    height: 110,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10
  },
  sharingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 18
  },
  textSharing: {
    fontSize: 20,
    color: '#000'
  },
  imageMore: {
    marginTop: 5
  },
  viewMainAccount:{
    height:65,
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:5,
    marginTop:10
  }


})