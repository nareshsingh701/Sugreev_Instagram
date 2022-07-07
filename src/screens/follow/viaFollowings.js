import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

const ViaFollowings = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modaVisible, setModaVisible] = useState(false);
  const [modalOneVisible, setModalOneVisible] = useState(false);
  const [modalTwoVisible, setModalTwoVisible] = useState(false);
  const [modalThreeVisible, setModalThreeVisible] = useState(false);
  const send = [
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Follow",
      suggest: "Suggested for you",
      icon: require('../../assets/images/crossGray.png')

    },
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Follow",
      suggest: "Suggested for you",
      icon: require('../../assets/images/crossGray.png')

    },
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Follow",
      suggest: "Suggested for you",
      icon: require('../../assets/images/crossGray.png')

    },
  ];
  const renderData = (listData) => {
    const { item, index } = listData;
    return (
      <View style={styles.viewMain}>
        <TouchableOpacity style={styles.viewRow}>
          <Image resizeMode={'cover'} style={styles.imageRajni} source={item.image} />
          <View style={styles.jaduView}>
            <Text numberOfLines={1} style={styles.textAnkush}>{item.name}</Text>
            <Text numberOfLines={1} style={styles.textSingh}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.textTitle}>{item.suggest}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.viewFollow}>
            <Text style={styles.textFollow}>{item.box}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageCross} source={item.icon} />
        </TouchableOpacity>
      </View>
    )
  }
  const data = [
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Following",
      icon: require('../../assets/images/threeDot.png.png')
    },
    {
      name: "atul_singh",
      title: "Atul_singh",
      image: require('../../assets/images/chhotu.jpg'),
      box: "Following",
      icon: require('../../assets/images/threeDot.png.png')
    },
    {
      name: "rinku_singh",
      title: "Rinku_singh",
      image: require('../../assets/images/anshikasingh.jpg'),
      box: "Following",
      icon: require('../../assets/images/threeDot.png.png')
    },
    {
      name: "bablu_singh",
      title: "Thakur_bablu_singh",
      image: require('../../assets/images/jadu.jpg'),
      box: "Following",
      icon: require('../../assets/images/threeDot.png.png')
    },
  ];
  const renderListData = (listData) => {
    const { item, index } = listData;
    return (

      <View style={styles.viewMain}>
        <TouchableOpacity style={styles.viewRow}>

          <Image resizeMode={'cover'} style={styles.imageJadu} source={item.image} />
          <View style={styles.viewJadu}>
            <Text numberOfLines={1} style={styles.textAnkush}>{item.name}</Text>
            <Text numberOfLines={1} style={styles.textSingh}>{item.title}</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.viewRemove}>
            <Text style={styles.textRemove}>{item.box}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModaVisible(true)}>
          <Image resizeMode={'cover'} style={styles.imageDot} source={item.icon} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewSearch}>
          <View style={styles.searchRow}>
            <Image resizeMode={'cover'} style={styles.imageSearch} source={require('../../assets/images/search.png.png')} />
            <TextInput style={styles.textInput}
              placeholderTextColor={'#595959'}
              placeholder='Search'
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.viewDefault}>
            <View style={styles.viewSort}>
              <Text style={styles.textSort}>Sorted by</Text>
              <Text style={styles.textDefault}>Default</Text>
            </View>
            <Image resizeMode={'cover'} style={styles.imageUpDown} source={require('../../assets/images/upDown.png')} />
          </View>
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
            <View style={styles.mainModal}>
              <View style={styles.viewModal}>
                <View style={styles.viewLine} />
                <Text style={styles.textBy}>Sort by</Text>
                <View style={styles.viewLineOne} />
                <View style={styles.viewPadding}>
                  <TouchableOpacity>
                    <View style={styles.defaultView}>
                      <Text style={styles.defaultText}>Default</Text>
                      <Image resizeMode={'cover'} style={styles.imageRound} source={require('../../assets/images/round.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.defaultView}>
                      <Text style={styles.defaultText}>Date followed: Latest</Text>
                      <Image resizeMode={'cover'} style={styles.imageRound} source={require('../../assets/images/round.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.defaultView}>
                      <Text style={styles.defaultText}>Date followed: Earliest</Text>
                      <Image resizeMode={'cover'} style={styles.imageRound} source={require('../../assets/images/round.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>
        <Modal
          animationType="slide"
          visible={modaVisible}
          transparent={true}
          onRequestClose={() => {

            setModaVisible(!modaVisible);
          }}
        >
          <Pressable onPress={() => setModaVisible(!modaVisible)} style={{ flex: 1 }}>
            <View style={styles.modaView}>
              <View style={styles.viewModa}>
                <View style={styles.viewLine} />
                <View style={styles.modalRow}>
                  <Image resizeMode={'cover'} style={styles.imageAnkushJpg} source={require('../../assets/images/ankush.jpg')} />
                  <Text style={styles.ankushText}>ankush_singh</Text>
                </View>
                <View style={styles.viewLineTwo} />
                <TouchableOpacity onPress={() => setModalOneVisible(true)}>
                  <Text style={styles.textManage}>Manage notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalThreeVisible(true)}>
                  <Text style={styles.textManage}>Mute</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Modal>
        <Modal
          animationType="slide"
          visible={modalThreeVisible}
          transparent={true}
          onRequestClose={() => {

            setModalThreeVisible(!modalThreeVisible);
          }}
        >
          <Pressable onPress={() => setModalThreeVisible(!modalThreeVisible)} style={{ flex: 1 }}>
            <View style={styles.modaView}>
              <View style={styles.viewNotification}>
                <View style={styles.viewLine} />
                <Text style={styles.textBy}>Mute</Text>
                <View style={styles.viewLineOne} />
                <View style={styles.viewPadding}>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Posts</Text>
                      <Image resizeMode={'cover'} style={styles.imageButton} source={require('../../assets/images/on.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Stories</Text>
                      <Image resizeMode={'cover'} style={styles.imageButton} source={require('../../assets/images/on.png')} />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.textMute}>Instagram wan't let them know you muted them.</Text>
                </View>
                
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
          <Pressable onPress={() => setModalOneVisible(!modalOneVisible)} style={{ flex: 1 }}>
            <View style={styles.modaView}>
              <View style={styles.viewNotification}>
                <View style={styles.viewLine} />
                <Text style={styles.textBy}>Notifications</Text>
                <View style={styles.viewLineOne} />
                <View style={styles.viewPadding}>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Posts</Text>
                      <Image resizeMode={'cover'} style={styles.imageButton} source={require('../../assets/images/on.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Stories</Text>
                      <Image resizeMode={'cover'} style={styles.imageButton} source={require('../../assets/images/on.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Videos</Text>
                      <Image resizeMode={'cover'} style={styles.imageButton} source={require('../../assets/images/on.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Reels</Text>
                      <Image resizeMode={'cover'} style={styles.imageButton} source={require('../../assets/images/on.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalTwoVisible(true)}>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Goes live</Text>
                      <View style={styles.viewSome}>
                        <Text style={styles.textSome}>All</Text>
                        <Image resizeMode={'cover'} style={styles.imageRight} source={require('../../assets/images/rightIcon.png')} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>
        <Modal
          animationType="slide"
          visible={modalTwoVisible}
          transparent={true}
          onRequestClose={() => {

            setModalTwoVisible(!modalTwoVisible);
          }}
        >
          <Pressable onPress={() => setModalTwoVisible(!modalTwoVisible)} style={{ flex: 1 }}>
            <View style={styles.modaView}>
              <View style={styles.viewNotification}>
                <View style={styles.viewLine} />
                <View style={styles.viewLive}>
                  <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.imageLeft} source={require('../../assets/images/left.png.png')} />
                  </TouchableOpacity>
                  <View style={styles.viewVideo}>
                    <Text style={styles.textLive}>Live videos</Text>
                  </View>
                </View>
                <View style={styles.viewLineOne} />
                <View style={styles.viewPadding}>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Get all notifications</Text>
                      <Image resizeMode={'cover'} style={styles.imageRound} source={require('../../assets/images/round.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Get some notifications</Text>
                      <Image resizeMode={'cover'} style={styles.imageRound} source={require('../../assets/images/round.png')} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.viewPosts}>
                      <Text style={styles.textPosts}>Turn off notifications</Text>
                      <Image resizeMode={'cover'} style={styles.imageRound} source={require('../../assets/images/round.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={styles.textEnd}>We automatically send notifications about live videos that may intrest you.But you can choose to always get a notification when ankush_singh starts a live video,or to never be notified when they go live.</Text>
              </View>
            </View>
          </Pressable>
        </Modal>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderListData}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.textSuggestion}>Suggestions for you</Text>
        <FlatList
          data={send}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderData}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Discover')}>
          <Text style={styles.textSee}>See all suggestions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ViaFollowings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 30
  },
  viewSearch: {
    height: 40,
    width: '100%',
    backgroundColor: '#d9d9d9',
    marginTop: 10,
    borderRadius: 7
  },
  searchRow: {
    flexDirection: 'row'
  },
  imageSearch: {
    height: 20,
    width: 20,
    marginTop: 10,
    marginLeft: 15
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
  },
  imageJadu: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  imageRajni: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginTop: 10
  },
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  viewRow: {
    flexDirection: "row"
  },
  viewRemove: {
    height: 30,
    width: 110,
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d9d9d9',

  },
  textRemove: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 1
  },
  textAnkush: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500'
  },
  textSingh: {
    fontSize: 18,
    color: '#666666'
  },
  viewJadu: {
    marginLeft: 15,
    width: '42%'
  },
  jaduView: {
    marginLeft: 15,
    width: '50%'
  },
  textSuggestion: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '500',
    color: '#000'
  },
  viewFollow: {
    height: 31,
    width: 85,
    backgroundColor: '#1a75ff',
    borderRadius: 4,
    marginRight: 10,
    marginTop: 20
  },
  textFollow: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 3,
    color: '#fff'
  },
  imageCross: {
    height: 16,
    width: 16,
    marginTop: 27
  },
  textSee: {
    fontSize: 17,
    color: '#1a75ff',
    marginTop: 20
  },
  viewSort: {
    flexDirection: 'row'
  },
  viewDefault: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25
  },
  textSort: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000'
  },
  textDefault: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8
  },
  imageUpDown: {
    height: 20,
    width: 20,
    marginTop: 5
  },
  imageDot: {
    height: 31,
    width: 31,
    marginTop: 9,
    marginLeft: 5
  },
  viewModal: {
    height: '40%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainModal: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end'
  },
  viewLine: {
    width: 40,
    borderWidth: 2.5,
    borderColor: '#666666',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  textBy: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,

  },
  viewLineOne: {
    width: '100%',
    height: 0.8,
    backgroundColor: '#cccccc',
    marginTop: 10
  },
  viewPadding: {
    paddingHorizontal: 16,
  },
  defaultView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  defaultText: {
    fontSize: 18,
    color: '#000',
  },
  imageRound: {
    height: 30,
    width: 30
  },
  viewModa: {
    height: '40%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  modaView: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end'
  },
  imageAnkushJpg: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginLeft: 6,
  },
  modalRow: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 20,

  },
  ankushText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginTop: 10,
    marginLeft: 15
  },
  viewLineTwo: {
    width: '100%',
    height: 0.8,
    backgroundColor: '#cccccc',
  },
  textManage: {
    fontSize: 20,
    margin: 10,
    marginLeft: 16,
    color: '#000',
  },
  viewNotification: {
    height: '90%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  viewPosts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },

  textPosts: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400'
  },
  imageButton: {
    height: 35,
    width: 35
  },
  viewSome: {
    flexDirection: 'row'
  },
  textSome: {
    fontSize: 20,
    color: '#595959',
    marginRight: 7
  },
  imageRight: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  viewLive: {
    flexDirection: 'row',
    marginTop: 10
  },
  imageLeft: {
    height: 25,
    width: 25,
    margin: 10
  },
  textLive: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  viewVideo: {
    marginLeft: 95
  },
  textEnd: {
    fontSize: 15,
    color: '#666666',
    marginHorizontal: 16,
    marginTop: 30
  },
  textMute:{
    fontSize:15,
    color:'#666666',
    marginTop:30
  }
})