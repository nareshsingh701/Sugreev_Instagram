import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const ViaPhone = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <TouchableOpacity>
                    <Text style={styles.text}>IN +91</Text>
                </TouchableOpacity>
                <View style={styles.viewTwo}>

                </View>
                <TextInput style={styles.TextInput} placeholder='Phone' />
            </View>
            <View>
                <Text>You may receive SMS notifications from us for security and purposes</Text>
            </View>

        </View>
    )
}

export default ViaPhone

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        height: 50,
        width: 330,
        borderWidth: 1,
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: 'gray'
    },
    viewTwo: {
        height: 30,
        width: 1,
        borderWidth: 0.4,
        marginTop: 10,
        marginLeft: 10,
        borderColor: 'gray'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    TextInput: {
        fontSize: 18,
        marginLeft: 10
    }
})