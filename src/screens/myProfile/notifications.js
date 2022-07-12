import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.push}>Push Notifications</Text>
            <View style={styles.viewMain}>
                <TouchableOpacity style={styles.viewPause}>
                    <Text style={styles.textPause}>Pause All</Text>
                    <Image resizeMode={'cover'} style={styles.button} source={require('../../assets/images/on.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textPost}>Posts,Stories and Comments</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textPost}>Following and followers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textPost}>Messages and Calls</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textPost}>Live and Video</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textPost}>Fundraisers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textPost}>From Instagram</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLine} />
            <Text style={styles.push}>Other Notification Types</Text>
            <TouchableOpacity>
                    <Text style={styles.textOther}>Email notification</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textOther}>Shopping</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    push: {
        fontSize: 20,
        margin: 16,
        fontWeight: '600',
        color: '#000',
    },
    viewMain: {
        paddingHorizontal: 16
    },
    viewPause: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:15
    },
    textPause:{
        fontSize:18,
        color:'#000',
        fontWeight:'500'
    },
    textPost:{
        fontSize:18,
        color:'#000', 
        marginTop:20  
    },
    viewLine:{
        height:0.8,
        width:'100%',
        backgroundColor:'#666666',
        marginTop:10
    },
    textOther:{
        fontSize:18,
        color:'#000',
        margin:10,
        marginLeft:16    
    }
    
})