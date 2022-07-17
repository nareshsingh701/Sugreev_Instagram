import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput, Modal, Linking, Pressable } from 'react-native'
import React, { useState } from 'react'

const Following = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [comeVisible, setComeVisible] = useState(false);
    const send = [
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/chhotu.jpg'),
            send: "Send"
        },
        {
            name: "Naresh Singh",
            title: "_thakur_naresh_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Atul Singh",
            title: "_atul_singh",
            image: require('../../assets/images/ankush.jpg'),
            send: "Send"
        },
        {
            name: "Rinku Singh",
            title: "_Rinku_singh",
            image: require('../../assets/images/rajsingh.jpg'),
            send: "Send"
        },
        {
            name: "Anshika Singh",
            title: "_thakur_anshika_singh",
            image: require('../../assets/images/rajni.jpg'),
            send: "Send"
        },
        {
            name: "Ashu Singh",
            title: "_thakur_ashu_singh",
            image: require('../../assets/images/raj.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/party.jpg'),
            send: "Send"
        },
        {
            name: "Anshu Singh",
            title: "_thakur_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Priyanshu Singh",
            title: "_thakur_priyanshu_singh",
            image: require('../../assets/images/sugreev.jpg'),
            send: "Send"
        },
        {
            name: "Bablu Singh",
            title: "_thakur_bablu_singh",
            image: require('../../assets/images/jadu.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/Anshika.jpg'),
            send: "Send"
        },
        {
            name: "Singh Raj",
            title: "_thakur_Raj_singh",
            image: require('../../assets/images/rani.jpg'),
            send: "Send"
        },
        {
            name: "Sugreev Singh",
            title: "_thakur_sugreev_singh",
            image: require('../../assets/images/anshikasingh.jpg'),
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
            image: require('../../assets/images/pravesh.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/rajsingh.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/ankush.jpg'),
            send: "Send"
        },
        {
            name: "Ankhush Singh",
            title: "_thakur_ankhush_singh",
            image: require('../../assets/images/chhotu.jpg'),
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
            image: require('../../assets/images/rajni.jpg'),
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

    return (

        <View style={styles.container}>
            <ScrollView>
            <View style={styles.viewFive}>
                <TouchableOpacity>
                    <View style={styles.viewSix}>
                        <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/rajsingh.jpg')} />
                        <Text style={styles.textOne}>Anshika_Singh</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setComeVisible(true)}>
                    <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/dotThree.png')} />
                </TouchableOpacity>
            </View>
                <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/sugreev.jpg')} />
            <View style={styles.viewHeart}>

                <View style={styles.heart}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Recent')}>
                        <Image resizeMode={'cover'} style={styles.imageHeart} source={require('../../assets/images/heart.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Activity')}>
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
            <View style={styles.paddingOne}>
                <TouchableOpacity style={styles.like}>
                    <Text style={styles.likeText}>15 likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.like}>
                    <Text style={styles.comment}>View all 6 comments</Text>
                </TouchableOpacity>
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
                <Text>3 days ago</Text>
            </View>

            <View style={styles.viewFou} />
            <View style={styles.viewFive}>
                <TouchableOpacity>
                    <View style={styles.viewSix}>
                        <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/jadu.jpg')} />
                        <Text style={styles.textOne}>Jadu_Singh</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setComeVisible(true)}>
                    <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/dotThree.png')} />
                </TouchableOpacity>
            </View>

                <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/jadu.jpg')} />

            <View style={styles.viewHeart}>

                <View style={styles.heart}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Recent')}>
                        <Image resizeMode={'cover'} style={styles.imageHeart} source={require('../../assets/images/heart.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Activity')}>
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
            <View style={styles.paddingOne}>
                <TouchableOpacity style={styles.like}>
                    <Text style={styles.likeText}>15 likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.like}>
                    <Text style={styles.comment}>View all 6 comments</Text>
                </TouchableOpacity>
                <View style={styles.viewTextInput}>
                    <View style={styles.textInputView}>
                        <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/ankush.jpg')} />
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
                <Text>3 days ago</Text>
            </View>



            <View style={styles.viewModal}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }}
                >
                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1 }}>
                        <View style={styles.modalView}>
                            <View style={styles.small}>
                            </View>
                            <View style={styles.padding}>
                                <View style={styles.textInputView}>
                                    <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                                    <TextInput style={styles.textInputOne}
                                        placeholderTextColor={'#666666'}
                                        placeholder='Write a message...'
                                    />

                                </View>
                            </View>

                            <View style={styles.line}>
                                <View style={styles.paddingTwo}>
                                    <View style={styles.lineOne}>
                                        <View style={styles.lineTwo}>
                                            <View style={styles.lineThree}>
                                                <Image resizeMode={'cover'} style={styles.search} source={require('../../assets/images/search.png.png')} />
                                                <TextInput style={styles.textLine}
                                                    placeholderTextColor={'#666666'}
                                                    placeholder='Search'
                                                />
                                            </View>

                                            <TouchableOpacity onPress={() => props.navigation.navigate('NewGroup')}>
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
                        </View>
                    </Pressable>
                </Modal>
            </View>
                <Modal
                    animationType="slide"
                    visible={comeVisible}
                    transparent={true}
                    onRequestClose={() => {

                        setComeVisible(!comeVisible);
                    }}
                >
                    <Pressable onPress={() => setComeVisible(!comeVisible)} style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <View style={styles.viewCome}>
                                <View style={styles.viewLine} />
                                <View style={styles.shareView}>
                                    <TouchableOpacity>
                                        <View style={styles.viewShare}>
                                            <Image resizeMode={'cover'} style={styles.imageShare} source={require('../../assets/images/share.png.png')} />
                                            <View>
                                                <Text style={styles.textShare}>Share</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.viewShare}>
                                            <Image resizeMode={'cover'} style={styles.imageLink} source={require('../../assets/images/link.png')} />
                                            <View>
                                                <Text style={styles.textLink}>Link</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.viewReport}>
                                            <Image resizeMode={'cover'} style={styles.imageReport} source={require('../../assets/images/report.png')} />
                                            <View>
                                                <Text style={styles.textReport}>Report</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <View style={styles.reportView}>
                                        <Text style={styles.reportText}>Why you`re seeing this post</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.reportViewOne}>
                                        <Text style={styles.reportText}>Remove from Favorites</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.reportViewOne}>
                                        <Text style={styles.reportText}>Hide</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.reportViewOne}>
                                        <Text style={styles.reportText}>Unfollow</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Pressable>
                </Modal>
            </ScrollView>
        </View>

    )
}


export default Following;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 30
    },
 
    viewOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
    },
    viewTwo: {
        flexDirection: 'row',
        marginTop: 25,
        margin: 15
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
        height: 30,
        width: 30,
        marginLeft: 20,

    },
    paddingTwo: {
        paddingHorizontal: 16
    },
    likeText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    },
    like: {
        marginTop: 6
    },
    comment: {
        fontSize: 16,
        color: '#666666'
    },

    viewFou: {
        height: 0.4,
        width: '100%',
        backgroundColor: '#cccccc',
        marginTop: 10
    },
    imageFive: {
        height: 45,
        width: 45,
        borderRadius: 25,
    },
    viewFive: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewSix: {
        padding: 5,
        paddingHorizontal: 16,
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
 

    row: {
        flexDirection: 'row'
    },
    viewHeart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 10
    },
    heart: {
        flexDirection: 'row',
    },
    bookmark: {
        height: 30,
        width: 30
    },
    imageHeart: {
        height: 30,
        width: 30
    },
    speech: {
        height: 30,
        width: 30,
        marginLeft: 20
    },
    sent: {
        height: 30,
        width: 30,
        marginLeft: 20
    },
    textInput: {
        fontSize: 16,
        marginLeft: 5,

    },
    viewTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    paddingOne: {
        paddingHorizontal: 16
    },
    textInputView: {
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
        width: 40,
        backgroundColor: '#666666',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 4,
        height: 4
    },
    padding: {
        marginTop: 10,
        paddingHorizontal: 13
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
        width: '100%',
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
        marginLeft: 10,
        marginTop: 8
    },
    textLine: {
        fontSize: 18,
        marginLeft: 5,

    },
    lineThree: {
        flexDirection: 'row',
    },
    user: {
        marginRight: 10,
        marginTop: 8
    },
    viewReel: {
        flexDirection: 'row',
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
    },
    followView: {
        flex: 1,
    },
    follow: {
        height: 100,
        width: '40%',
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        marginTop: 70,
        margin: 15
    },
    viewChecked: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10
    },
    followText: {
        fontSize: 18,
        color: '#000'
    },
    viewStar: {
        borderWidth: 0.4,
        marginTop: 15,
        borderColor: 'gray'
    },
    imageStar: {
        height: 30,
        width: 30
    },

    viewStarTwo: {
        borderWidth: 0.4,
        marginTop: 10
    },
    viewCome: {
        height: '60%',
        width: '100%',
        backgroundColor: '#e6e6e6',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,

    },
    viewLine: {

        width: 40,
        height: 4,
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 2,
        backgroundColor: '#666666'
    },
    viewShare: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'gray'
    },
    imageShare: {
        alignSelf: 'center',
        marginTop: 12,
        height: 25,
        width: 25
    },
    shareView: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 15
    },
    imageLink: {
        alignSelf: 'center',
        marginTop: 12,
        height: 25,
        width: 25,
    },
    imageReport: {
        height: 25,
        width: 25,
        alignSelf: 'center',
        marginTop: 12
    },
    textShare: {
        marginTop: 15,
        marginLeft: 5,
        fontWeight: '600',
        color: '#000'
    },
    textLink: {
        marginTop: 17,
        marginLeft: 10,
        fontWeight: '600',
        color: '#000'
    },
    textReport: {
        marginTop: 15,
        marginLeft: 5,
        fontWeight: '600',
        color: 'red'
    },
    viewReport: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'red'
    },
    reportView: {
        marginTop: 40,
        height: 45,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 0.4,
        padding: 10
    },
    reportText: {
        fontSize: 18,
        color: '#000'
    },
    reportViewOne: {
        padding: 10
    }
})