import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Chat = (props) => {
    const data = [
        {
            name: "atul singh",
            title: "singh",
            image: require('../../assets/images/chhotu.jpg'),
            icon: require('../../assets/images/round.png')
        },
        {
            name: "ankush singh",
            title: "thakur",
            image: require('../../assets/images/ankush.jpg'),
            icon: require('../../assets/images/round.png')
        },
        {
            name: "rinku singh",
            title: "singh rinku",
            image: require('../../assets/images/rajni.jpg'),
            icon: require('../../assets/images/round.png')
        },
        {
            name: "naresh singh",
            title: "chauhan",
            image: require('../../assets/images/raj.jpg'),
            icon: require('../../assets/images/round.png')
        },
        {
            name: "raj singh",
            title: "brand",
            image: require('../../assets/images/rajsingh.jpg'),
            icon: require('../../assets/images/round.png')
        },
        {
            name: "sonu singh",
            title: "super",
            image: require('../../assets/images/rani.jpg'),
            icon: require('../../assets/images/round.png')
        },
        {
            name: "thakur singh",
            title: "singh",
            image: require('../../assets/images/jadu.jpg'),
            icon: require('../../assets/images/round.png')
        },
        {
            name: "anshika singh",
            title: "study",
            image: require('../../assets/images/rajsingh.jpg'),
            icon: require('../../assets/images/round.png')
        },
    ];
    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.viewImage}>
                <TouchableOpacity style={styles.imageOne}>
                    <Image resizeMode={'cover'} style={styles.rajni} source={item.image} />
                    <View style={styles.viewAtul}>
                        <Text style={styles.textAtul}>{item.name}</Text>
                        <Text style={styles.atulText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewRound}>
                    <Image resizeMode={'cover'} style={styles.round} source={item.icon} />
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.viewBack}>
                    <TouchableOpacity onPress={() => props.navigation.goBack('Message')}>
                        <Image resizeMode={'cover'} style={styles.imageBack} source={require('../../assets/images/left.png.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textMessage}>New message</Text>
                </View>
                <Text style={styles.chat}>Chat</Text>
            </View>
            <View style={styles.viewTo}>
                <Text style={styles.textTo}>To</Text>
            </View>

            <TextInput style={styles.textInput}
                placeholder='Search'
            />
            <ScrollView>
                <Text style={styles.suggest}>Suggested</Text>
               
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderListData}
            />
            </ScrollView>
        </View>
    )
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    viewBack: {
        flexDirection: 'row'
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    imageBack: {
        height: 25,
        width: 25,
        marginTop: 3
    },
    textMessage: {
        fontSize: 22,
        marginLeft: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    chat: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 2
    },
    viewTo: {
        marginTop: 5
    },
    textTo: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000'
    },
    textInput: {
        fontSize: 20,
        marginLeft: 10
    },
    suggest: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginTop: 15
    },
    round: {
        height: 30,
        width: 30
    },
    imageOne: {
        flexDirection: 'row'
    },
    viewImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    rajni: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    viewAtul: {
        marginLeft: 15
    },
    textAtul: {
        fontSize: 18,
        color: '#000'
    },
    atulText: {
        fontSize: 16
    },
    viewRound: {
        marginTop: 8
    }
})