import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

const SwitchAccount = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.instagram}>Instagram</Text>
            <View style={styles.viewMain}>
                <View style={styles.row}>
                    <Image resizeMode={'cover'} style={styles.imageAnshika} source={require('../../assets/images/Anshika.jpg')} />
                    <Text style={styles.textAnshika}>anshikasingh12345</Text>
                </View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Instagram')}>
                    <View style={styles.viewLog}>
                        <Text style={styles.textLog}>Log in</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image resizeMode={'cover'} style={styles.imageDot} source={require('../../assets/images/threeDot.png.png')} />
                </TouchableOpacity>

                <Modal
                    animationType="fade"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }}
                >

                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1 }}>
                        <View style={styles.viewModalMain}>
                            <View style={styles.modalView}>
                                <Text style={styles.textRemove}>Remove account</Text>
                                <Text style={styles.textLine}>You'll need to enter your username and password the next time you want to log in.</Text>
                                <View style={styles.viewLineTwo} />
                                <TouchableOpacity>
                                <Text style={styles.removeText}>Remove</Text>
                                </TouchableOpacity>
                                <View style={styles.viewLineThree} />
                                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                                <Text style={styles.textCancel}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Pressable>
                </Modal>
            </View>
            <View style={styles.viewEnd}>
                <View style={styles.viewLine}>
                </View>
            </View>
            <View style={styles.viewSwitch}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                    <Text style={styles.textSwitch}>Switch Accounts</Text>
                </TouchableOpacity>
                <View style={styles.viewSmall} />
                <TouchableOpacity onPress={()=>props.navigation.navigate('CreateNewAccount')}>
                    <Text style={styles.textSign}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SwitchAccount

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    instagram: {
        fontSize: 40,
        fontWeight: '600',
        margin: 16,
        textAlign: 'center',
        color: '#000'
    },
    imageAnshika: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    row: {
        flexDirection: 'row'
    },
    viewLog: {
        height: 36,
        width: 80,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        marginLeft: 40,
        marginTop: 5
    },
    viewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 10
    },
    textAnshika: {
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 10,
        color: '#000'
    },
    textLog: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginTop: 4,
        fontWeight: '500'
    },
    imageDot: {
        height: 29,
        width: 29,
        marginTop: 10
    },
    viewLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#cccccc',

    },
    viewEnd: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    viewSwitch: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    viewSmall: {
        height: 50,
        width: 1,
        backgroundColor: '#cccccc',
        marginRight: 50
    },
    textSwitch: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: '500',
        color: '#0081fb'
    },
    textSign: {
        fontSize: 18,
        marginTop: 10,
        marginRight: 30,
        fontWeight: '500',
        color: '#0081fb'
    },
    modalView: {
        height: 290,
        width: '70%',
        backgroundColor: '#fff',
        borderRadius: 20,
    
    },
    viewModalMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRemove:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
        color:'#000'
    },textLine:{
        fontSize:17,
    textAlign:'center',
    marginTop:10,
    lineHeight:25,
    color:'#666666',
    marginHorizontal:45
    },
    viewLineTwo:{
        height:0.4,
        width:'100%',
        backgroundColor:'#cccccc',
        marginTop:30
    },
    viewLineThree:{
        height:1,
        width:'100%',
        backgroundColor:'#cccccc', 
        marginTop:10 
    },
    removeText:{
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
        color:'#0081fb',
        marginTop:10
    },
    textCancel:{
        fontSize:20,
        color:'#000',
        textAlign:'center',
        marginTop:10
    }
})