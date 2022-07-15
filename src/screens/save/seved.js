import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Seved = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewMain}>
                <View style={styles.viewRow}>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.imageLeft} source={require('../../assets/images/left.png.png')} />
                    </TouchableOpacity>
                    <Text style={styles.seved}>Seved</Text>
                </View>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.imagePlus} source={require('../../assets/images/plusBlack.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Seved;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewRow: {
        flexDirection: 'row'
    },
    viewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 15
    },
    imageLeft: {
        height: 30,
        width: 30,
        marginTop: 3
    },
    seved: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        marginLeft: 30
    }
})