import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,ScrollView } from 'react-native'
import React,{useState} from 'react'

const LoginHelp = (props) => {
    const [name,setName]=useState('');
    let isButton=name.length<= 5;

    const user=()=>{
        navigation.navigate("accessYourAccount",{
            userName:name
        })
       
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Login help</Text>
            </View>
            <View style={styles.viewOne}>
                <Text style={styles.textTwo}>Find your account </Text>
            </View>
            <View style={styles.viewTwo}>
                <Text style={styles.textThree}>Enter your username or the email or phone number linked to your account</Text>
            </View>
            <View style={styles.viewThree}>
                <TextInput style={styles.textInput}
                    placeholder='Username, email or phone'
                   value={name} 
                   onChangeText={(text)=>setName(text)}
                    />
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('accessYourAccount',{user,userName:name})}>
                <View style={styles.viewFour}>
                    <Text style={styles.textFour}>Next</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.viewFive}> 
                <View style={styles.viewSix}>
                </View>
                <View style={styles.viewSeven}>
                    <Text style={styles.textFive}>OR</Text>
                </View>
                <View style={styles.viewSix}>
                </View>
            </View>

            <View style={styles.viewEight}>

                <View>
                    <Image resizeMode={'cover'} style={styles.image} source={require('../../assets/images/facebookBlack.png')} />
                </View>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.textSix}>Log in with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.viewTen}>
                <TouchableOpacity>
                    <Text style={styles.textSeven}>Can`t reset your password? </Text>
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    )
}

export default LoginHelp;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        marginLeft: 15,
        marginTop: 20
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        color: '#000'
    },
    viewOne: {
        alignSelf: 'center',
        marginTop: 50
    },
    textTwo: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000'
    },
    viewTwo: {
        alignSelf: 'center',
        marginTop: 15
    },
    textThree: {
        marginHorizontal: 70,
        fontSize: 16,
lineHeight:27
    },
    viewThree: {
        height: 50,
        width: 300,
        borderWidth: 0.4,
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 5,
        borderColor: 'gray'
    },
    textInput: {
        fontSize: 16,
        padding: 10
    },
    viewFour: {
        height: 50,
        width: 300,
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#1e88e5'
    },
    textFour: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 10
    },
    viewFive: {
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center'
    },
    viewSix: {
        width: 127,
        borderTopWidth: 0.4,
        marginTop: 12,
      
    },
    viewSeven: {
        marginHorizontal: 10,

    },
    textFive: {
        fontSize: 18,
        fontWeight: '600'
    },
    viewEight: {
        height: 50,
        width: 300,
        borderWidth: 0.8,
        borderColor: 'gray',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius:5
    },
    image: {
        marginLeft: 45,
        marginTop: 13,
    
    },
    viewTen: {
        alignSelf: 'center',
        marginTop: 210,
        marginBottom:20
    },
    textSix: {
        fontSize: 18,
        marginTop: 13,
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#000'
    },
    textSeven: {
        fontSize: 15,
        color: '#1e88e5',
        fontWeight:'400 '
    }

})