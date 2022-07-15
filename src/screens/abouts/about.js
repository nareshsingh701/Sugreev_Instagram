import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.app}>App updates</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.app}>Data Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.app}>Terms of Use</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.app}>Open source libraries</Text>
            </TouchableOpacity>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16
    },
    app:{
        fontSize:20,
        color:'#000',
        marginTop:25
    }
})