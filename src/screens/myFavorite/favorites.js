import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

const Favorites = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const send = [
        {
            name: "ankush_singh",
            title: "Ankush Singh",
            image: require('../../assets/images/ankush.jpg'),
            ad: "Add"
        },
        {
            name: "rinku_singh",
            title: "Rinku Singh",
            image: require('../../assets/images/Anshika.jpg'),
            ad: "Add"
        },
        {
            name: "jadu_singh",
            title: "Jadu Singh",
            image: require('../../assets/images/jadu.jpg'),
            ad: "Add"
        },
        {
            name: "atul_singh",
            title: "Atul Singh",
            image: require('../../assets/images/chhotu.jpg'),
            ad: "Add"
        },
        {
            name: "naresh_singh",
            title: "Naresh Singh",
            image: require('../../assets/images/rajsingh.jpg'),
            ad: "Add"
        },
        {
            name: "anshika_singh",
            title: "Thakur_Anshika_ Singh",
            image: require('../../assets/images/anshikasingh.jpg'),
            ad: "Add"
        },
    ];
    const renderData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.rowMain}>
                <TouchableOpacity>
                    <View style={styles.viewRow}>
                        <Image resizeMode={'cover'} style={styles.imageAnkush} source={item.image} />
                        <View style={styles.ankush}>
                            <Text numberOfLines={1} style={styles.textAnkush}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.singh}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewAdd}>
                        <Text style={styles.textAdd}>{item.ad}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const data = [
        {
            name: "ankush_singh",
            title: "Ankush Singh",
            image: require('../../assets/images/ankush.jpg'),
            move: "Remove"
        },
        {
            name: "atul_singh",
            title: "Atul Singh",
            image: require('../../assets/images/chhotu.jpg'),
            move: "Remove"
        },
        {
            name: "naresh_singh",
            title: "Thakur Singh",
            image: require('../../assets/images/rajni.jpg'),
            move: "Remove"
        },
        {
            name: "jadu_singh",
            title: "Jadu Singh",
            image: require('../../assets/images/jadu.jpg'),
            move: "Remove"
        },
        {
            name: "bablu_singh",
            title: "Singh",
            image: require('../../assets/images/rajsingh.jpg'),
            move: "Remove"
        },
        {
            name: "bablu_singh",
            title: "Singh",
            image: require('../../assets/images/rajsingh.jpg'),
            move: "Remove"
        },
        {
            name: "bablu_singh",
            title: "Singh",
            image: require('../../assets/images/rajsingh.jpg'),
            move: "Remove"
        },
    ];
    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.rowMain}>
                <TouchableOpacity>
                    <View style={styles.viewRow}>
                        <Image resizeMode={'cover'} style={styles.imageAnkush} source={item.image} />
                        <View style={styles.ankush}>
                            <Text numberOfLines={1} style={styles.textAnkush}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.singh}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRemove}>
                        <Text style={styles.textRemove}>{item.move}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewMain}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image resizeMode={'cover'} style={styles.imageLeft} source={require('../../assets/images/left.png.png')} />
                    </TouchableOpacity>
                    <Text style={styles.favorite}>Favorites</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Suggestion')}>
                    <Image resizeMode={'cover'} style={styles.imagePlus} source={require('../../assets/images/plusBlack.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.post}>Posts from your favorites are shown higher in feed. We don't send notifications when you edit your favorites. <Text style={styles.how}>How it works</Text></Text>
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
                        <View style={styles.modal}>
                            <View style={styles.viewSmall} />
                            <Text style={styles.work}>How it works</Text>
                            <View style={styles.viewLineModal} />
                            <View style={styles.modalPadding}>
                                <View style={styles.modalRow}>
                                    <Image resizeMode={'cover'} style={styles.imageUser} source={require('../../assets/images/userGroup.png')} />
                                    <View style={styles.viewModal}>
                                        <Text style={styles.textModal}>Add accounts to your favorites list</Text>
                                        <Text style={styles.textYou}>You can search for accounts or view suggestions based on your activity.</Text>
                                    </View>
                                </View>
                                <View style={styles.modalRow}>
                                    <Image resizeMode={'cover'} style={styles.imageUser} source={require('../../assets/images/star.png')} />
                                    <View style={styles.viewModal}>
                                        <Text style={styles.textModal}>See favorites higher in your feed</Text>
                                        <Text style={styles.textYou}>New posts from your favorites will appear higher in feed so you don't miss out.</Text>
                                    </View>
                                </View>
                                <View style={styles.modalRow}>
                                    <Image resizeMode={'cover'} style={styles.imageUser} source={require('../../assets/images/lockSmall.png')} />
                                    <View style={styles.viewModal}>
                                        <Text style={styles.textModal}>Only you can see who is on your list</Text>
                                        <Text style={styles.textYou}>Your favorites won't be notified when you add or remove them.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Pressable>
            </Modal>


            <View style={styles.viewLine} />
            <View style={styles.padding}>

                <View style={styles.viewSearch}>
                    <View style={styles.searchRow}>
                        <Image resizeMode={'cover'} style={styles.imageSearch} source={require('../../assets/images/search.png.png')} />
                        <TextInput style={styles.textInput}
                            placeholderTextColor={'#666666'}
                            placeholder='Search' />
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.padding}>
                    <View style={styles.rowFavorite}>
                        <Text style={styles.textFavorite}>Favorites</Text>
                        <TouchableOpacity onPress={() => setModalOneVisible(true)}>
                            <Text style={styles.remove}>Remove all</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            visible={modalOneVisible}
                            transparent={true}
                            onRequestClose={() => {

                                setModalOneVisible(!modalOneVisible);
                            }}
                        >
                            <Pressable onPress={()=>setModalOneVisible(!modalOneVisible)} style={{flex:1}}>
                                <View style={styles.mainModal}>
                                    <View style={styles.modalOne}>
                                        <View style={styles.viewSmall} />
                                        <Text style={styles.are}>Are you sure?</Text>
                                        <View style={styles.viewLineModal} />
                                        <TouchableOpacity style={styles.removeAll}>
                                            <Text style={styles.allRemove}>Remove all</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.removeAll}>
                                            <Text style={styles.cancel}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Pressable>
                        </Modal>
                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderListData}
                    />
                    <Text style={styles.suggestion}>Suggestions</Text>
                    <FlatList
                        data={send}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderData}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },
    viewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        marginTop: 5
    },
    imageLeft: {
        height: 30,
        width: 30
    },
    favorite: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
        marginLeft: 25
    },
    post: {
        fontSize: 18,
        color: '#666666',
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 27,
        marginTop: 10
    },
    how: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'
    },
    textFavorite: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500'
    },
    viewLine: {
        height: 0.4,
        width: '100%',
        backgroundColor: '#cccccc',
        marginTop: 15
    },
    viewLineModal: {
        height: 0.4,
        width: '100%',
        backgroundColor: '#cccccc',
        marginTop: 10
    },
    padding: {
        paddingHorizontal: 16
    },
    viewSearch: {
        height: 41,
        width: '100%',
        backgroundColor: '#cccccc',
        borderRadius: 10,
        marginTop: 15
    },
    searchRow: {
        flexDirection: 'row',
    },
    textInput: {
        fontSize: 20,
        marginLeft: 15
    },
    imageSearch: {
        height: 22,
        width: 22,
        marginTop: 8,
        marginLeft: 15
    },
    rowFavorite: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    remove: {
        fontSize: 18,
        fontWeight: '500',
        color: '#0081fb'
    },
    imageAnkush: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    viewRow: {
        flexDirection: 'row'
    },
    rowMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    textAnkush: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },
    ankush: {
        marginLeft: 20,
        width: 200
    },
    singh: {
        fontSize: 18
    },
    viewRemove: {
        height: 36,
        width: 100,
        backgroundColor: '#cccccc',
        borderRadius: 8,
        marginTop: 5
    },
    textRemove: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        marginTop: 5
    },
    suggestion: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 15
    },
    viewAdd: {
        height: 36,
        width: 90,
        backgroundColor: '#0081fb',
        borderRadius: 8,
        marginTop: 5
    },
    textAdd: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginTop: 5
    },
    modal: {
        height: 340,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    modalOne: {
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    mainModal: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    viewSmall: {
        height: 4,
        width: 40,
        backgroundColor: '#666666',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 2
    },
    work: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
        marginTop: 10
    },
    modalPadding: {
        paddingHorizontal: 16
    },
    modalRow: {
        flexDirection: 'row',
        marginTop: 10
    },
    textModal: {
        fontSize: 18,
        color: '#000',
        fontWeight: '500'
    },
    viewModal: {
        marginLeft: 15
    },
    textYou: {
        fontSize: 18,
        color: '#666666',
        width: 330
    },
    imageUser: {
        height: 25,
        width: 25
    },
    are: {
        fontSize: 18,
        margin: 10,
        color: '#000',
        marginTop: 20,
        marginLeft: 16
    },
    removeAll: {
        paddingHorizontal: 16,
        marginTop: 15
    },
    allRemove: {
        fontSize: 20,
        color: 'red'
    },
    cancel: {
        fontSize: 20,
        color: '#000000'
    }
})