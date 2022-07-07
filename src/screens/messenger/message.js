import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const Message = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/ankush.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Atul Singh",
      title: "Send Monday",
      image: require('../../assets/images/chhotu.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Rinku Singh",
      title: "Send Friday",
      image: require('../../assets/images/rajni.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/jadu.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/rajsingh.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/Anshika.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/raj.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Atul Singh",
      title: "Send Monday",
      image: require('../../assets/images/sugreev.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Rinku Singh",
      title: "Send Friday",
      image: require('../../assets/images/anshikasingh.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/rani.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/Anshika.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
    {
      name: "Ankush Singh",
      title: "Send Sunday",
      image: require('../../assets/images/raj.jpg'),
      icon: require('../../assets/images/cameraPic.png')
    },
  ];
  const renderListData = (listData) => {
    const { item, index } = listData;
    return (
      <View style={styles.viewAnshika}>
        <TouchableOpacity>
          <View style={styles.anshikaView}>
            <Image resizeMode={'cover'} style={styles.imageAnshika} source={item.image} />
            <View style={styles.viewAnkush}>
              <Text style={styles.textAnkush}>{item.name}</Text>
              <Text style={styles.ankushText}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.viewCamera}>
            <Image resizeMode={'cover'} style={styles.imageCamera} source={item.icon} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <View style={styles.rowView}>
          <TouchableOpacity onPress={() => props.navigation.goBack('Instagram')}>
            <Image resizeMode={'cover'} style={styles.imageBack} source={require('../../assets/images/left.png.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text numberOfLines={1} style={styles.textJoya}>joyasingh12345678</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewImage}>
          <TouchableOpacity>
            <Image resizeMode={'cover'} style={styles.imageVideo} source={require('../../assets/images/videoIcon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
            <Image resizeMode={'cover'} style={styles.imagePlus} source={require('../../assets/images/plusBlack.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.viewModal}>
          <View style={styles.viewHeight}>
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
      </Modal>
      <ScrollView>
        <View style={styles.viewOne}>
          <View style={styles.viewSearch}>
            <Image resizeMode={'cover'} style={styles.imageSearch} source={require('../../assets/images/search.png.png')} />
            <TextInput style={styles.textInput}
              placeholder='Search'
            />
          </View>
        </View>
        <View style={styles.viewMessage}>
          <Text style={styles.message}>Messages</Text>
          <TouchableOpacity>
            <Text style={styles.request}>Requests</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderListData}
        />
      </ScrollView>
    </View>
  )
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  rowView: {
    flexDirection: 'row'
  },
  textJoya: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
    marginTop: 2
  },
  viewImage: {
    flexDirection: 'row'
  },
  imageBack: {
    height: 27,
    width: 27,
    marginTop: 3
  },
  imageVideo: {
    height: 25,
    width: 25,
    marginTop: 7,
    marginRight: 15
  },
  imagePlus: {
    height: 40,
    width: 40
  },
  viewOne: {
    height: 40,
    width: '100%',
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    marginTop: 15
  },
  textInput: {
    fontSize: 18,
    fontWeight: '400'

  },
  viewSearch: {
    flexDirection: 'row'
  },
  imageSearch: {
    height: 23,
    width: 23,
    margin: 10
  },
  viewMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  message: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000'
  },
  request: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1a75ff'
  },
  viewAnshika: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  anshikaView: {
    flexDirection: 'row'
  },
  imageAnshika: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  viewAnkush: {
    marginLeft: 13,
    marginTop: 3
  },
  textAnkush: {
    fontSize: 18,
    color: '#000',
  },
  ankushText: {
    fontSize: 16
  },
  imageCamera: {
    height: 30,
    width: 30
  },
  viewCamera: {
    marginTop: 15
  },
  viewModal: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  viewHeight: {
    height: 220,
    width: '100%',
    backgroundColor: 'pink',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 16,

  },
  viewLine: {
    width: 40,
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 13,
    borderRadius: 2,
    borderColor: 'gray'
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
  viewRound: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
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
  viewBlack: {
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
  }
})