import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Account = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity>
                    <Text style={styles.personal}>Personal information</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Seved</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Close Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Account Status</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Avatar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Captions</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Browser settings</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Sensitive content control</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Contacts syncing</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Sharing to other apps</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Cellular data use</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Original posts</Text>
                </TouchableOpacity>
                    <Text style={styles.personal}>Request verification</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Review activity</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.personal}>Branded content</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.switch}>Switch to professional account</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.switch}>Add new professional account</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginBottom:30
    },
    personal: {
        fontSize: 20,
        color:'#000',
        marginTop:20
    },
    switch:{
        fontSize: 20,
        color:'#0081fb',
        marginTop:20   
    }
})