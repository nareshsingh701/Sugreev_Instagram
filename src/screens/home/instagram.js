import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Instagram = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.viewOne}>

                    <View style={styles.viewTwo}>

                        <Text style={styles.text}>Instagram</Text>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/list.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewThree}>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageThree} source={require('../../assets/images/plusicons.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageFour} source={require('../../assets/images/messenger.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.gallery}>
                    <View style={styles.row}>
                        <View style={styles.viewGallery}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.anshika} source={require('../../assets/images/Anshika.jpg')} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.story}>Your story</Text>
                            </View>
                        </View>
                        <View style={styles.viewGallery}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.anshika} source={require('../../assets/images/Anshika.jpg')} />
                            </TouchableOpacity>
                            <Text style={styles.story}>Ankush</Text>
                        </View>
                        <View style={styles.viewGallery}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.anshika} source={require('../../assets/images/Anshika.jpg')} />
                            </TouchableOpacity>
                            <Text style={styles.story}>Naresh</Text>
                        </View>
                        <View style={styles.viewGallery}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.anshika} source={require('../../assets/images/Anshika.jpg')} />
                            </TouchableOpacity>
                            <Text style={styles.story}>Sugreev</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewFour}>
                    <View style={styles.viewFive}>
                        <TouchableOpacity>
                            <View style={styles.viewSix}>
                                <Image resizeMode={'cover'} style={styles.imageFive} source={require('../../assets/images/Anshika.jpg')} />
                                <Text style={styles.textOne}>Anshika_Singh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.imageSix} source={require('../../assets/images/dotThree.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewSeven}>
                    <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/Anshika.jpg')} />
                </View>
                <View>
                    <View style={styles.viewHeart}>

                        <View style={styles.heart}>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageHeart} source={require('../../assets/images/heart.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.speech} source={require('../../assets/images/speech.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.sent} source={require('../../assets/images/sent.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bookmark}>

                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.imageBookmark} source={require('../../assets/images/bookmark.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Image resizeMode={'cover'} style={styles.imageSeven} source={require('../../assets/images/Anshika.jpg')} />

            </ScrollView>
            
        </View>
    )
}

export default Instagram

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    view: {
        height: 80,
        width: '100%',
       // backgroundColor: 'pink'
    },
    viewOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
    },
    viewTwo: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10
    },
    text: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000'
    },
    imageTwo: {
        marginTop: 13,
        marginLeft: 5,

    },
    viewThree: {
        flexDirection: 'row',
        marginTop: 35
    },
    imageThree: {
        height: 25,
        width: 25,
        marginTop: 3
    },
    imageFour: {
        marginLeft: 30,
        height: 30,
        width: 30
    },
    viewFour: {
        height: 55,
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        marginTop: 10
    },
    imageFive: {
        height: 35,
        width: 35,
        borderRadius: 17,
        marginTop: 5
    },
    viewFive: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewSix: {
        padding: 5,
        marginLeft: 10,
        flexDirection: 'row'
    },
    textOne: {
        fontSize: 18,
        color: '#000',
        marginLeft: 15,
        marginTop: 7
    },
    imageSix: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginRight: 7
    },
    imageSeven: {
        height: 400,
        width: '100%',

    },
    viewSeven: {
        // alignSelf:'center'
    },
    anshika: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 5
    },
    gallery: {
        height: 120,
        width: '100%'
    },
    viewGallery: {
        padding: 10,
        // flexDirection: 'row'
    },
    story: {
        fontSize: 16,
        color: '#000',
        marginTop: 7
    },
    row: {
        flexDirection: 'row'
    },
    viewHeart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
    },
    heart: {
        flexDirection: 'row',

        padding: 10
    },
    bookmark: {
        marginTop: 10
    },
    imageHeart: {
        height: 35,
        width: 35
    },
    speech: {
        height: 35,
        width: 35,
        marginLeft: 20
    },
    sent: {
        height: 35,
        width: 35,
        marginLeft: 20
    }
})