import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FollowAndInviteFriends = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.viewMain}>
                    <Image resizeMode={'cover'} style={styles.imageEmail} source={require('../../assets/images/msg.png.png')} />
                    <Text style={styles.textEmail}>Invite friends by email</Text> 
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.viewMain}>
                    <Image resizeMode={'cover'} style={styles.imageEmail} source={require('../../assets/images/msg.png.png')} />
                    <Text style={styles.textEmail}>Invite friends by SMS</Text> 
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.viewMain}>
                    <Image resizeMode={'cover'} style={styles.imageEmail} source={require('../../assets/images/share.png.png')} />
                    <Text style={styles.textEmail}>Invite friends by...</Text> 
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default FollowAndInviteFriends;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    viewMain: {
        flexDirection: 'row',
        marginTop: 20
    },
    textEmail:{
        fontSize:18,
        marginLeft:10,
        color:'#000000',
    }
})