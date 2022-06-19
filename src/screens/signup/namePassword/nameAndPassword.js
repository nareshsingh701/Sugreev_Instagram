import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React, { useState } from 'react'

const NameAndPassword = (props) => {
  const [text, changeText] = useState('');

  let isButton = text.length <= 1;
  const onPressNext = () => {
    const combin = text;
    props.navigation.navigate('AddYourBirthday')
  }
  const onChange = (value) => {
    changeText(value)
  }
  const [password, changePassword] = useState('')
  let button = password.length <= 1;
  const onPassword = () => {
    const combin = password;

    const password = (value) => {
      changePassword(value)
    }
  }
  return (

    <ScrollView style={styles.container} >
      <View style={styles.view}>
        <Text style={styles.text}>NAME AND PASSWORD</Text>
      </View>
      <View style={styles.viewOne}>
        <TextInput style={styles.textInput}
          placeholder='Full name'
          onChangeText={onChange}
        />
      </View>
      <View style={styles.viewOne}>
        <TextInput style={styles.textInput}
          secureTextEntry={true}
          placeholder='Password'
          onChangePassword={password}
        />
      </View>
      <TouchableOpacity
        disabled={isButton}
        onPress={() => onPressNext()}>
        <View style={styles.viewTwo}>
          <Text style={styles.textOne}>Continue and sync contacts</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.viewThree}>
          <Text style={styles.textTwo}>Continue without syncing contacts</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.viewFour}>
        <Text>Your contacts will be periodically synced and stored on Instagram servers to help you and others find friends,and to help us provide a better service.To remove contacts,go to Settings and disconnect<Text style={styles.textThree} onPress={() => Linking.openURL('https://help.instagram.com/227486307449481/?ref=share')}> Learn More.</Text></Text>

      </View>
    </ScrollView>
  )
}

export default NameAndPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewOne: {
    height: 50,
    width: 300,
    borderWidth: 0.8,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 5,
    borderColor: 'gray'
  },
  view: {
    marginTop: 20,
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000'
  },
  textInput: {
    fontSize: 18,
    padding: 10
  },
  viewTwo: {
    height: 50,
    width: 300,
    backgroundColor: '#1a75ff',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20
  },
  textOne: {
    fontSize: 17,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 12,
    fontWeight: '600'
  },
  viewThree: {
    alignSelf: 'center',
    marginTop: 20
  },
  textTwo: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1a75ff'
  },
  viewFour: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 100
  },
  textThree: {
    fontSize: 15,
    color: '#333300',
    fontWeight: '600'
  }

})