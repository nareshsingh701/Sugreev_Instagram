import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const AccessYourAccount = ({ route, navigation }) => {
    console.log("AccessYourAccount",route.params)
      const user = () => {
        navigation.navigate("ResetPassword", {
            userName: route.params.userName,
            
        })

    }
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Image resizeMode={'cover'} style={styles.image} source={require('../../assets/images/instagram.png.png')} />
            </View>
            <View style={styles.viewOne}>
                <Text style={styles.text}>
                    {route.params.userName}
                </Text>
            </View>
            <TouchableOpacity>
                <View style={styles.viewTwo}>
                    <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/email.png')} />
                    <Text style={styles.textOne}>Send an email</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.viewThree}>

                    <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/facebookLogo.png')} />
                    <Text style={styles.textOne}>Log in with Facebook</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.viewFour}
                onPress={() => (user()) } >
                <Text style={styles.textTwo}>Can`t reset your password?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AccessYourAccount;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    view: {
        alignSelf: 'center',
        marginTop: 60
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 70
    },
    viewOne: {
        marginTop: 20,
        height: 50,
        width: '100%',

    },
    text: {
        fontSize: 25,
        color: '#000',
        textAlign: 'center'
    },
    viewTwo: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        marginTop: 20,
        height: 50,
        width: '100%',
        alignSelf: 'center'

    },

    textOne: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        color: '#000'
    },
    imageTwo: {
        // marginLeft: 15,
        height: 30,
        width: 30,
        marginTop: 8
    },
    viewThree: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderBottomWidth: 0.4,
        height: 50,
        width: '100%',
        alignSelf: 'center'
    },
    viewFour: {
        marginTop: 15,
    },
    textTwo: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a237e'
    },


})