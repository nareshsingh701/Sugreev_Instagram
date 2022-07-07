import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'

const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOneVisible, setModalOneVisible] = useState(false);
  const [modalTwoVisible, setModalTwoVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.viewMain}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/lockSmall.png')} />
            <Text numberOfLines={1} style={styles.textJoya}>joyasingh12345678</Text>
            <Image resizeMode={'cover'} style={styles.imageList} source={require('../../assets/images/list.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imagePlus} source={require('../../assets/images/plusicons.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageThreeList} source={require('../../assets/images/threeList.png')} />
        </TouchableOpacity>
      </View>
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
              <View style={styles.viewLine} />
              <View style={styles.viewRound}>
                <View style={styles.joyaView}>
                  <Image resizeMode={'cover'} style={styles.imageAnshika} source={require('../../assets/images/Anshika.jpg')} />
                  <Text style={styles.joyaText}>joyasingh12345678</Text>
                </View>
                <Image resizeMode={'cover'} style={styles.imageRound} source={require('../../assets/images/round.png')} />
              </View>
              <TouchableOpacity>
                <View style={styles.viewBlack}>
                  <View style={styles.viewPlus}>
                    <Image resizeMode={'cover'} style={styles.imageBlack} source={require('../../assets/images/plusBlack.png')} />
                  </View>
                  <View style={styles.viewAdd}>
                    <Text style={styles.textAdd}>Add account</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
      <Modal
        animationType="slide"
        visible={modalOneVisible}
        transparent={true}
        onRequestClose={() => {

          setModalOneVisible(!modalOneVisible);
        }}
      >
        <View style={styles.viewModalMain}>
          <View style={styles.viewModal}>
            <View />

            
          </View>
        </View>
      </Modal>
      <View style={styles.viewRaj}>
        <TouchableOpacity>
          <View>
            <Image resizeMode={'cover'} style={styles.imageAnshika} source={require('../../assets/images/Anshika.jpg')} />
            <Text style={styles.textSingh}>Singh Raj</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.textTwo}>2</Text>
            <Text style={styles.textPost}>Posts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Follow')}>
          <View>
            <Text style={styles.textTwo}>3</Text>
            <Text style={styles.textPost}>Followers</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Follow')}>
          <View>
            <Text style={styles.textTwo}>17</Text>
            <Text style={styles.textPost}>Following</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewEditRow}>
        <View style={styles.viewEdit}>
          <TouchableOpacity>
            <Text style={styles.textEdit}>Edit profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.viewIcon}>
            <Image resizeMode={'cover'} style={styles.imageAdd} source={require('../../assets/images/addUser.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  viewRow: {
    flexDirection: 'row',

  },
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  imageLock: {
    height: 16,
    width: 16,
    marginTop: 6
  },
  textJoya: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginLeft: 7
  },
  imageList: {
    marginTop: 6,
    marginLeft: 7
  },
  imagePlus: {
    height: 25,
    width: 25,
    marginTop: 5
  },
  imageThreeList: {
    marginTop: 2
  },
  imageAnshika: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  viewRaj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25
  },
  textTwo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center'
  },
  textPost: {
    fontSize: 17,
    color: '#000'
  },
  textSingh: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000'
  },
  viewModal: {
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 16
  },
  viewModalMain: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewLine: {
    width: 40,
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 13,
    borderRadius: 2,
    borderColor: 'gray'
  },
  viewRound: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  joyaView: {
    flexDirection: 'row',

  },
  joyaText: {
    fontSize: 16,
    margin: 13,
    fontWeight: '500',
    color: '#000'
  },
  imageAnshika: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  viewBlack: {
    flexDirection: 'row'
  },
  viewPlus: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderWidth: 1,
    marginTop: 15,
    borderColor: 'gray',
    flexDirection: 'row'
  },
  viewAdd: {
    margin: 13,
    marginTop: 30
  },
  textAdd: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500'
  },
  viewEdit: {
    height: 35,
    width: '88%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
  },
  viewIcon: {
    height: 35,
    width: 35,
    backgroundColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',

  },
  viewEditRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  textEdit: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '500',
    color: '#000'
  },
  imageAdd: {
    alignSelf: 'center',
    marginTop: 5
  }
})