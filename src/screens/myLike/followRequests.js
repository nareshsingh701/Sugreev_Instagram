import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'

const FollowRequests = (props) => {
    const data = [
        {
            name: "atul_singh",
            title: "Thakur_atul_singh",
            following: "Follow",
            image: require('../../assets/images/chhotu.jpg'),
            icon: require('../../assets/images/cross.png')
        },
        {
            name: "ankush_singh",
            title: "Thakur_ankush_singh",
            following: "Follow",
            image: require('../../assets/images/ankush.jpg'),
            icon: require('../../assets/images/cross.png')
        },
        {
            name: "naresh_singh",
            title: "Thakur_naresh_singh",
            following: "Follow",
            image: require('../../assets/images/raj.jpg'),
            icon: require('../../assets/images/cross.png')
        },
        {
            name: "rinku_singh",
            title: "Thakur_rinku_singh",
            following: "Follow",
            image: require('../../assets/images/jadu.jpg'),
            icon: require('../../assets/images/cross.png')
        },
        {
            name: "anshika_singh",
            title: "Thakur_rajni_singh",
            following: "Follow",
            image: require('../../assets/images/Anshika.jpg'),
            icon: require('../../assets/images/cross.png')
        },
        {
            name: "bablu_singh",
            title: "Thakur_bablu_singh",
            following: "Follow",
            image: require('../../assets/images/anshikasingh.jpg'),
            icon: require('../../assets/images/cross.png')
        },

    ];
    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.mainView}>
                <TouchableOpacity>
                    <View style={styles.viewRow}>
                        <Image resizeMode={'cover'} style={styles.imageAnkush} source={item.image} />
                        <View style={styles.viewConnect}>
                            <Text numberOfLines={1} style={styles.textConnect}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.textFollow}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewFollow}>
                        <Text style={styles.connectText}>{item.following}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.imageCross} source={item.icon} />
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewMain}>
                <View style={styles.viewLeft}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Image resizeMode={'cover'} style={styles.leftImage} source={require('../../assets/images/left.png.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textOne}>Follow requests</Text>
                </View>
                <Text style={styles.textManage}>Manage</Text>
            </View>
            <ScrollView>
                <View style={styles.viewUser}>
                    <Image resizeMode={'cover'} style={styles.userImage} source={require('../../assets/images/maleUser.png')} />
                </View>
                <View style={styles.followView}>
                    <Text style={styles.textRequest}>Follow requests</Text>
                </View>
                <Text style={styles.textTitle}>When people ask to follow you,you'll see their requests here.</Text>
                <Text style={styles.textSuggest}>Suggestions for you</Text>

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderListData}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Discover')}>
            <Text style={styles.textSee}>See all suggestions</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FollowRequests;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginBottom: 40
    },
    viewLeft: {
        flexDirection: 'row'
    },
    viewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    leftImage: {
        height: 30,
        width: 30
    },
    textOne: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 30
    },
    textManage: {
        fontSize: 22,
        fontWeight: '600',
        color: '#808080'
    },
    viewUser: {
        alignSelf: 'center',
        marginTop: 20
    },
    userImage: {
        height: 100,
        width: 100
    },
    followView: {
        alignSelf: 'center'
    },
    followText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    textTitle: {
        fontSize: 16,
        color: '#595959',
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 22,
        marginTop: 10
    },
    textSuggest: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
        marginTop: 40
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,

    },
    viewRow: {
        flexDirection: 'row'
    },
    imageAnkush: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginTop: 12,
        marginLeft: 5
    },
    viewConnect: {
        marginLeft: 10,
        marginTop: 5,
        height: 60,
        width: '50%',
        //  backgroundColor:'red'
    },
    textConnect: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },
    textFollow: {
        fontSize: 18,
        fontWeight: '400',
        color: '#666666'
    },
    viewFollow: {
        height: 31,
        width: 80,
        backgroundColor: '#1a75ff',
        borderRadius: 4,
        marginTop: 15,

    },
    connectText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        alignSelf: 'center',
        marginTop: 2
    },
    imageCross: {
        height: 15,
        width: 15,
        marginTop: 23
    },
    textRequest: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    textSee:{
        fontSize:18,
        marginTop:15,
        color:'#1a75ff'
    }
})