import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'

const Instagram = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const send = [
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
    ];
    const renderData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.sendView}>
                <View style={styles.viewSend}>
                    <Image resizeMode={'cover'} style={styles.imageSend} source={item.image} />
                    <View style={styles.viewSendOne}>
                        <Text style={styles.textSend}>{item.name}</Text>
                        <Text textSendOne>{item.title}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.viewSendTwo}>
                        <Text style={styles.textSendTwo}>{item.send}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const data = [
        {
            name: "Your story",
            image: require('../../assets/images/Anshika.jpg')
        },
        {
            name: "Ankush Singh",
            image: require('../../assets/images/Anshika.jpg')
        },
        {
            name: "Naresh Singh",
            image: require('../../assets/images/Anshika.jpg')
        },
        {
            name: "Sugreev Singh",
            image: require('../../assets/images/Anshika.jpg')
        },
        {
            name: "Anshika Singh",
            image: require('../../assets/images/Anshika.jpg')
        },
        {
            name: "Atul Singh",
            image: require('../../assets/images/Anshika.jpg')
        },
        {
            name: "Rinku Singh",
            image: require('../../assets/images/Anshika.jpg')
        },
    ]
    const openGallery = () => {
        props.navigation.navigate('Gallery')
    }

    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.viewGallery}>
                <TouchableOpacity onPress={openGallery}>
                    <Image resizeMode={'cover'} style={styles.anshika} source={item.image} />
                </TouchableOpacity>
                <Text numberOfLines={1} style={styles.story}>{item.name}</Text>
            </View>
        )
    }
    return (

        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.viewOne}>

                    <View style={styles.viewTwo}>

                        <Text style={styles.text}>Instagram</Text>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/list.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewThree}>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageThree} source={require('../../assets/images/plusicons.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageFour} source={require('../../assets/images/messenger.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <FlatList
                    data={data}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderListData}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.viewFour}>
                    <View style={styles.viewFive}>
                        <TouchableOpacity>
                            <View style={styles.viewSix}>
                                <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                                <Text style={styles.textOne}>Anshika_Singh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/dotThree.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewSeven}>
                    <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/Anshika.jpg')} />
                </View>
                <View>
                    <View style={styles.viewHeart}>

                        <View style={styles.heart}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageHeart} source={require('../../assets/images/heart.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.speech} source={require('../../assets/images/speech.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Image resizeMode={'cover'} style={styles.sent} source={require('../../assets/images/sent.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bookmark}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageBookmark} source={require('../../assets/images/bookmark.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.viewTextInput}>

                    <View style={styles.textInputView}>
                        <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                        <TextInput style={styles.textInput}
                            placeholder='Add a comment...'
                        />

                    </View>
                    <View style={styles.icon}>
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/redHeart.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/hand.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/iconPlus.png')} />
                    </View>
                </View>
                <View style={styles.viewFour}>
                    <View style={styles.viewFive}>
                        <TouchableOpacity>
                            <View style={styles.viewSix}>
                                <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                                <Text style={styles.textOne}>Anshika_Singh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/dotThree.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewSeven}>
                    <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/Anshika.jpg')} />
                </View>
                <View>
                    <View style={styles.viewHeart}>

                        <View style={styles.heart}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageHeart} source={require('../../assets/images/heart.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.speech} source={require('../../assets/images/speech.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.sent} source={require('../../assets/images/sent.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bookmark}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageBookmark} source={require('../../assets/images/bookmark.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.viewTextInput}>

                    <View style={styles.textInputView}>
                        <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                        <TextInput style={styles.textInput}
                            placeholder='Add a comment...'
                        />

                    </View>
                    <View style={styles.icon}>
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/redHeart.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/hand.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/iconPlus.png')} />
                    </View>
                </View>
                <View style={styles.viewFour}>
                    <View style={styles.viewFive}>
                        <TouchableOpacity>
                            <View style={styles.viewSix}>
                                <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                                <Text style={styles.textOne}>Anshika_Singh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/dotThree.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewSeven}>
                    <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/Anshika.jpg')} />
                </View>
                <View>
                    <View style={styles.viewHeart}>

                        <View style={styles.heart}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageHeart} source={require('../../assets/images/heart.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.speech} source={require('../../assets/images/speech.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.sent} source={require('../../assets/images/sent.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bookmark}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageBookmark} source={require('../../assets/images/bookmark.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.viewTextInput}>

                    <View style={styles.textInputView}>
                        <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                        <TextInput style={styles.textInput}
                            placeholder='Add a comment...'
                        />

                    </View>
                    <View style={styles.icon}>
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/redHeart.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/hand.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/iconPlus.png')} />
                    </View>
                </View>
                <View style={styles.viewFour}>
                    <View style={styles.viewFive}>
                        <TouchableOpacity>
                            <View style={styles.viewSix}>
                                <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                                <Text style={styles.textOne}>Anshika_Singh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/dotThree.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewSeven}>
                    <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/Anshika.jpg')} />
                </View>
                <View>
                    <View style={styles.viewHeart}>

                        <View style={styles.heart}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageHeart} source={require('../../assets/images/heart.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.speech} source={require('../../assets/images/speech.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.sent} source={require('../../assets/images/sent.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bookmark}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageBookmark} source={require('../../assets/images/bookmark.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.viewTextInput}>

                    <View style={styles.textInputView}>
                        <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                        <TextInput style={styles.textInput}
                            placeholder='Add a comment...'
                        />

                    </View>
                    <View style={styles.icon}>
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/redHeart.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/hand.png')} />
                        <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/iconPlus.png')} />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.viewModal}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                >
                    <View style={styles.modalView}>
                        <View style={styles.small}>
                        </View>
                        <View style={styles.padding}>
                            <View style={styles.textInputView}>
                                <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                                <TextInput style={styles.textInputOne}
                                    placeholder='Write a message...'
                                />

                            </View>
                        </View>
                        <View style={styles.line}>
                            <View style={styles.lineOne}>
                                <View style={styles.lineTwo}>
                                    <View style={styles.lineThree}>
                                        <Image resizeMode={'cover'} style={styles.search} source={require('../../assets/images/search.png.png')} />
                                        <TextInput style={styles.textLine}
                                            placeholder='Search'
                                        />
                                    </View>

                                    <TouchableOpacity>
                                        <Image resizeMode={'cover'} style={styles.user} source={require('../../assets/images/userGroup.png')} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <ScrollView>

                                <TouchableOpacity>
                                    <View style={styles.viewReel}>
                                        <Image resizeMode={'cover'} style={styles.imageReel} source={require('../../assets/images/Anshika.jpg')} />
                                        <Text style={styles.textReel}>Add reel to Your story</Text>
                                    </View>
                                </TouchableOpacity>

                                <FlatList
                                    data={send}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={renderData}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Instagram

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    view: {
        height: 80,
        width: '100%',
        // backgroundColor: 'pink'
    },
    viewOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
    },
    viewTwo: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10
    },
    text: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000'
    },
    imageTwo: {
        marginTop: 13,
        marginLeft: 5,

    },
    viewThree: {
        flexDirection: 'row',
        marginTop: 35
    },
    imageThree: {
        height: 25,
        width: 25,
        marginTop: 3
    },
    imageFour: {
        marginLeft: 30,
        height: 30,
        width: 30
    },
    viewFour: {
        height: 55,
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        marginTop: 10
    },
    imageFive: {
        height: 45,
        width: 45,
        borderRadius: 23,
    },
    viewFive: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewSix: {
        padding: 5,
        marginLeft: 10,
        flexDirection: 'row'
    },
    textOne: {
        fontSize: 18,
        color: '#000',
        marginLeft: 15,
        marginTop: 7
    },
    imageSix: {
        height: 25,
        width: 25,
        marginTop: 15,
        margin: 5
    },
    imageSeven: {
        height: 400,
        width: '100%',

    },
    viewSeven: {

    },
    anshika: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginHorizontal: 10
    },
    gallery: {
        height: 120,
        width: '100%',

    },
    viewGallery: {
        marginRight: 0
    },
    story: {
        fontSize: 16,
        color: '#000',
        marginTop: 7,
        width: 100,
        marginLeft: 8
    },
    row: {
        flexDirection: 'row'
    },
    viewHeart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
    },
    heart: {
        flexDirection: 'row',

        padding: 10
    },
    bookmark: {
        marginTop: 10
    },
    imageHeart: {
        height: 35,
        width: 35
    },
    speech: {
        height: 35,
        width: 35,
        marginLeft: 20
    },
    sent: {
        height: 35,
        width: 35,
        marginLeft: 20
    },
    textInput: {
        fontSize: 16,
        marginLeft: 5,
        marginBottom: 30,

    },
    viewTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    textInputView: {
        padding: 5,

        flexDirection: 'row'
    },
    icon: {
        flexDirection: 'row',

    },
    viewModal: {
        flex: 1,

    },
    modalView: {

        backgroundColor: '#fff',
        marginTop: 158,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingBottom: 40,

    },
    small: {
        width: 50,
        backgroundColor: '#262626',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 2,
        height: 3
    },
    padding: {
        marginTop: 10,
        paddingHorizontal: 16
    },
    line: {
        height: '100%',
        width: '100%',
        borderWidth: 0.4,
        marginTop: 10

    },
    textInputOne: {
        fontSize: 16,
        marginLeft: 5,
    },
    lineOne: {
        alignSelf: 'center',
        height: 40,
        width: 350,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        marginTop: 10,
    },
    lineTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    search: {
        height: 25,
        width: 25,

        marginLeft: 10
    },
    textLine: {
        fontSize: 16,
        marginLeft: 5,

    },
    lineThree: {
        flexDirection: 'row',
        padding: 5
    },
    user: {
        marginRight: 10,
        marginTop: 5
    },
    viewReel: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 15,
       
    },
    imageReel: {
        height: 45,
        width: 45,
        borderRadius: 23
    },
    textReel: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 18,
        color: '#1a8cff'
    },
    viewSend: {
        flexDirection: 'row',
        marginLeft: 2
    },
    imageSend: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    viewSendOne: {
        marginLeft: 15
    },
    textSend: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600'
    },
    sendView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 15
    },
    viewSendTwo: {
        height: 33,
        width: 90,
        backgroundColor: '#1a8cff',
        borderRadius: 5,
        marginTop: 5
    },
    textSendTwo: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 4,
        color: '#fff'
    }
})