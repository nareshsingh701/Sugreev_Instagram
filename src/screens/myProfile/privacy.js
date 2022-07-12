import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Privacy = (props) => {
    return (
        
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.account}>Account privacy</Text>
            <TouchableOpacity>
                <View style={styles.viewMain}>
                    <View style={styles.viewRow}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/lockSmall.png')} />
                        <Text style={styles.private}>Private account</Text>
                    </View>
                    <Image resizeMode={'cover'} style={styles.imageButoon} source={require('../../assets/images/on.png')} />
                </View>
            </TouchableOpacity>
            <View style={styles.viewLine} />
            <View style={styles.padding}>
                <Text style={styles.textMain}>Interactions</Text>
                <TouchableOpacity>
                    <View style={styles.viewMainOne}>
                        <View style={styles.viewRow}>
                            <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/lockSmall.png')} />
                            <Text style={styles.private}>Limits</Text>
                        </View>
                        <Text style={styles.off}>Off</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/eye.png')} />
                        <Text style={styles.private}>Hidden Words</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/speech.png')} />
                        <Text style={styles.private}>Comments</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/plusicon.png')} />
                        <Text style={styles.private}>Posts</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewMainOne}>
                        <View style={styles.viewRow}>
                            <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/lockSmall.png')} />
                            <Text style={styles.private}>Mentions</Text>
                        </View>
                        <Text style={styles.off}>Everyone</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/storySmall.png')} />
                        <Text style={styles.private}>Story</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/live.png')} />
                        <Text style={styles.private}>Live</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/book.png')} />
                        <Text style={styles.private}>Guides</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/lockSmall.png')} />
                        <Text style={styles.private}>Activity Status</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/messenger.png')} />
                        <Text style={styles.private}>Messages</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLine} />
            <View style={styles.padding}>
                <Text style={styles.textMain}>Connections</Text>
                <TouchableOpacity>
                    <View style={styles.viewMainOne}>
                        <View style={styles.viewRow}>
                            <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/lockSmall.png')} />
                            <Text style={styles.private}>Restricted accounts</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/eye.png')} />
                        <Text style={styles.private}>Blocked accounts</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/speech.png')} />
                        <Text style={styles.private}>Muted accounts</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.viewRowOne}>
                        <Image resizeMode={'cover'} style={styles.imageLock} source={require('../../assets/images/plusicon.png')} />
                        <Text style={styles.private}>Accounts you follow</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    ) 
}

export default Privacy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:30
    },
    account: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        margin: 16,
        marginTop: 20
    },
    textMain: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        marginTop: 20
    },
    viewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    viewMainOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    viewRow: {
        flexDirection: 'row'
    },
    viewRowOne: {
        flexDirection: 'row',
        marginTop: 20
    },
    private: {
        fontSize: 18,
        marginLeft: 10,
        color: '#000',
    
    },
    viewLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#666666',
        marginTop: 12
    },
    padding: {
        paddingHorizontal: 16
    },
    off: {
        fontSize: 18,
        marginTop:5
    },
    imageLock:{
        height:25,
        width:25
    },
    imageButoon:{
       height:30,
       width:30 ,
       marginTop:5
    }
})