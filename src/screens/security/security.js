import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Security = () => {
    return (
        <View style={styles.container}>
            <View style={styles.padding}>
                <Text style={styles.loginSecurity}>Login security</Text>
                <TouchableOpacity>
                    <View style={styles.viewPassword}>
                        <Image resizeMode={'cover'} style={styles.imagePassword} source={require('../../assets//images/lockSmall.png')} />
                        <Text style={styles.password}>Password</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewPassword}>
                        <Image resizeMode={'cover'} style={styles.imagePassword} source={require('../../assets//images/lockSmall.png')} />
                        <Text style={styles.password}>Login activity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewPassword}>
                        <Image resizeMode={'cover'} style={styles.imagePassword} source={require('../../assets//images/lockSmall.png')} />
                        <Text style={styles.password}>Saved login info</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewPassword}>
                        <Image resizeMode={'cover'} style={styles.imagePassword} source={require('../../assets//images/lockSmall.png')} />
                        <Text style={styles.password}>Two-factor authentication</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewPassword}>
                        <Image resizeMode={'cover'} style={styles.imagePassword} source={require('../../assets//images/lockSmall.png')} />
                        <Text style={styles.password}>Emails from instagram</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewPassword}>
                        <Image resizeMode={'cover'} style={styles.imagePassword} source={require('../../assets//images/lockSmall.png')} />
                        <Text style={styles.password}>Security Checkup</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLine} />
            <Text style={styles.textData}>Data and history</Text>
            <TouchableOpacity style={styles.app}>
            <Image resizeMode={'cover'} style={styles.imagePassword} source={require('../../assets//images/lockSmall.png')} />
                        <Text style={styles.password}>App and websites</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Security;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    padding: {
        paddingHorizontal: 16,
        marginTop: 20
    },
    loginSecurity: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
    viewPassword: {
        flexDirection: 'row',
        marginTop: 20
    },
    imagePassword: {
        height: 25,
        width: 25
    },
    password: {
        fontSize: 18,
        color: '#000',
        marginLeft: 10
    },
    viewLine:{
        height:0.4,
        width:'100%',
        backgroundColor:'#666666',
        marginTop:15
    },
    textData:{
        fontSize:18,
        fontWeight:'500',
        color:'#000',
        margin:16
    },
    app:{
        flexDirection:'row',
        margin:10,
        marginLeft:16
    }
})