import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Suggestion = (props) => {
    const data = [
        {
            name: "ankush_singh",
            title: "Thakur Ankush Singh",
            image: require('../../assets/images/ankush.jpg'),
            add: "Add"
        },
        {
            name: "naresh_singh",
            title: "Naresh Singh",
            image: require('../../assets/images/jadu.jpg'),
            add: "Add"
        },
    ];
    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.mainRow}>
                <TouchableOpacity>
                    <View style={styles.row}>
                        <Image resizeMode={'cover'} style={styles.imageAnkush} source={item.image} />
                        <View style={styles.viewAnkush}>
                            <Text numberOfLines={1} style={styles.textAnkush}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.textSingh}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewAdd}>
                        <Text style={styles.add}>{item.add}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.imageLeft} source={require('../../assets/images/left.png.png')} />
                </TouchableOpacity>
                <TextInput style={styles.textInput}
                    placeholderTextColor={'#666666'}
                    placeholder='Search' />
            </View>
            <View style={styles.viewLine} />
            <View style={styles.padding}>
                <Text style={styles.suggestion}>Suggestions</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderListData}
                />
            </View>
        </View>
    )
}

export default Suggestion;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    imageLeft: {
        height: 30,
        width: 30,
        marginTop: 15,
        margin: 16
    },
    textInput: {
        fontSize: 22,
    },
    viewLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#cccccc'
    },
    suggestion: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        marginTop: 10
    },
    padding: {
        paddingHorizontal: 16
    },
    row: {
        flexDirection: 'row'
    },
    mainRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    imageAnkush: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginLeft: 5
    },
    viewAnkush: {
        marginLeft: 25,
        width: 200
    },
    textAnkush: {
        fontSize: 18,
        color: '#000',
        fontWeight: '500',
    },
    textSingh: {
        fontSize: 18,
        color: '#666666'
    },
    viewAdd: {
        height: 40,
        width: 100,
        backgroundColor: '#0081fb',
        borderRadius: 10,
        marginTop: 5
    },
    add: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
        marginTop: 7
    }
})