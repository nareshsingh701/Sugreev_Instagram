import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'

const ViaEmail = (props) => {
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
        <TextInput style={styles.textInput}
          placeholder='Email'
          onChangeText={onChange}
        />
        <View style={styles.viewOne}>
          <TouchableOpacity>
            <Image resizeMode={'cover'} style={styles.image} source={require('../../assets/images/cross.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        disabled={isButton}
        onPress={() => onPressNext()}
        style={styles.viewTwo}
      >
        <Text style={styles.text}>Next</Text>


      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default ViaEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    height: 50,
    width: 300,
    borderWidth: 0.8,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'gray',
    justifyContent: 'space-between',
    marginHorizontal: 16
  },
  image: {
    marginTop: 15,
    height: 20,
    width: 20,

  },
  viewOne: {
    marginRight: 10
  },
  textInput: {
    marginLeft: 10,
    fontSize: 18,
  },
  viewTwo: {
    height: 50,
    width: 300,
    borderWidth: 0.8,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#448aff',
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#fff',

  }
})