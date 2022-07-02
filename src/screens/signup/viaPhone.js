import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, {useEffect, useState } from 'react'

const ViaPhone = (props) => {
    const [text, changeText] = useState('');

    let isButton = text.length <= 1;
    const onPressNext = () => {
        const combin = text;
          props.navigation.navigate('NameAndPassword')
    }
    const onChange = (value) => {
        changeText(value)
    }


    return ( 
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.view}>
                <TouchableOpacity>
                    <Text style={styles.text}>IN +91</Text>
                </TouchableOpacity>
                <View style={styles.viewTwo}>

                </View>
                <TextInput style={styles.TextInput}
                    placeholder='Phone'
                    onChangeText={onChange}
                />
            </View>
            <View style={styles.viewThree}>
                <Text style={styles.textOne}>You may receive SMS notifications from us for security and purposes.</Text>
            </View>
            <TouchableOpacity
               style={styles.viewFour}
                disabled={isButton}
                onPress={() => onPressNext()}>
              
                    <Text style={styles.textTwo}>Next</Text>
        
            </TouchableOpacity>
         
        </View>
        </ScrollView>
    )
}

export default ViaPhone;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        height: 50,
        width: 300,
        borderWidth: 0.8,
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
        marginTop: 12,
        marginLeft: 10,
        borderColor: 'gray'
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
        
    },
    TextInput: {
        fontSize: 18,
        marginLeft: 10
    },
    viewThree: {
        marginTop: 10

    }, textOne: {
    paddingHorizontal:16,
        fontSize: 14,
       textAlign:'center'
    },
    viewFour: {
        height: 50,
        width: 300,
        backgroundColor: '#448aff',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    textTwo: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        
    },
    viewFive: {
        borderWidth: 0.4,
        borderColor: 'gray'
    },
    viewSix: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15
    },
    textThree: {
        fontSize: 15,
        fontWeight: '400'
    },
    textFour: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#000'
    }
})