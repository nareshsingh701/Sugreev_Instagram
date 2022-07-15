import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const UserName = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewMain}>
                <View style={styles.viewRow}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image resizeMode={'cover'} style={styles.imageCross} source={require('../../assets/images/cross.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textEdit}>Username</Text>
                </View>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.imageCheck} source={require('../../assets/images/checkBig.png')} />
                </TouchableOpacity>
                
            </View>
            <TextInput style={styles.textInput}
            placeholderTextColor={'#666666'}
             placeholder='Username' 
            />
            <View style={styles.viewLine} />
            <Text style={styles.textTitle}>You'll be able to change your username back to <Text style={styles.textUser}>anshikasingh12345 </Text>for another 14 days.</Text>
            <TouchableOpacity>
            <Text style={styles.textLearn}>Learn More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16
    },
    viewRow: {
        flexDirection: 'row',
    },
    viewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    imageCross: {
        height: 35,
        width: 35
    },
    textEdit: {
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 30,
        color: '#000'
    },
    imageCheck: {
        height: 40,
        width: 65,
    },
    textInput:{
        fontSize:18,
        marginTop:15
    },
    viewLine:{
        height:0.4,
        width:'100%',
        backgroundColor:'#0081fb'
    },
    textTitle:{
        marginTop:10,
        fontSize:16
    },
    textUser:{
        fontSize:17,
        fontWeight:'500',
        color:'#595959'
    },
    textLearn:{
        fontSize:18,
        color:'#0081fb'
    }
})