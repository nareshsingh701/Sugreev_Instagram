import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Linking, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {
  const data = [
    {
      name: "English",
    },
    {
      name: "Afrikaans",
    },
    {
      name: "Bahasa Melayu",
      title: "Malay"
    },
    {
      name: "Dansk"
    },
    {
      name: "Bahasa Indonesia",
      title: "Indonesia"
    },
    {
      name: "Deutsch"
    },
    {
      name: "English(UK)",
    },
    {
      name: "Filipino",
    },
    {
      name: "Suomi",
      title: "Finnish"
    },
    {
      name: "Magyar",
      title: "Hungariam"
    },
    {
      name: "English",
    },

  ];
  const renderListData = (listData) => {
    const { item, index } = listData;
    return (
      <View style={styles.language}>
        <View style={styles.viewLanguage}>
          <Text style={styles.textLanguage}>{item.name}</Text>
          <Text style={styles.languageText}>{item.title}</Text>
        </View>
      </View>
    )
  }

  const [modalVisible, setModalVisible] = useState(false);

  const [password, changePassword] = useState('')
  let button = password.length <= 1;
  const onPassword = () => {
    const combin = password;
    const password = (value) => {
      changePassword(value)
    }
  }

  const [text, changeText] = useState('');

  let isButton = text.length <= 1;
  const onPressNext = () => {
    const combin = text;
    props.navigation.navigate('Instagram')
  }
  const onChange = (value) => {
    changeText(value)
  };


  return (

    <View style={styles.container}>
      <View style={styles.modalView}>
        <View style={styles.viewModal}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {

              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.viewTwelve}>
              <View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={styles.textNine}>English (United States)</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image resizeMode={'cover'} style={styles.imageThree} source={require('../../assets/images/list.png')} />
              </View>
            </View>

          </Modal>
          <View style={styles.viewSelect}>
            <Text style={styles.textSelect}>SELECT YOUR LANGUAGE</Text>
          </View>
          <View style={styles.viewFist}>
            <View style={styles.searchView}>
              <Image resizeMode={'cover'} style={styles.searchImage} source={require('../../assets/images/search.png.png')} />
              <TextInput style={styles.input}
                placeholder='Search'
              />
            </View>
          </View>
          <View style={styles.lineOne}>
            <View style={styles.line} />
          </View>

          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderListData}

          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.textOne}>Instagram</Text>

        </View>
        <View style={styles.viewOne} >
          <TextInput
            style={styles.textInput}
            disabled={isButton}
            placeholder='Phone number,email or username'
            onChangeText={onChange}
          />
        </View>

        <View style={styles.viewTwo}>

          <TextInput
            style={styles.textInputOne}
            disabled={button}
            secureTextEntry={true}
            placeholder='Password'
            onChangePassword={password}

          />
          <TouchableOpacity>
            <Image resizeMode={'cover'} style={styles.imageOne} source={require('../../assets/images/hide.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image resizeMode={'cover'} style={styles.imageOne} source={require('../../assets/images/eye.png')} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity disabled={isButton}
          onPress={() => onPressNext()}
          style={styles.viewTree}
        >
          <Text style={styles.textTwo}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.viewfour}>
          <Text style={styles.textTree}>Forgot your login details?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('loginHelp')}>
            <Text style={styles.textFour}>Get help logging in.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSeven}>
          <View style={styles.viewFive}>
          </View>
          <View style={styles.viewEight}>
            <Text style={styles.textFive}>OR</Text>
          </View>
          <View style={styles.viewFive}>
          </View>
        </View>
        <View style={styles.viewNine}>
          <View>
            <Image resizeMode={'cover'} style={styles.imageThree} source={require('../../assets/images/facebook.png')} />
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.textSix} onPress={() => Linking.openURL('https://m.facebook.com/v2.3/dialog/oauth?app_id=124024574287414&cbt=1655689124686&e2e=%7B%22init%22%3A1655689124686%7D&sso=chrome_custom_tab&scope=email&state=%7B%220_auth_logger_id%22%3A%22bf00d35b-31f7-4cb8-9030-8c9f01fac215%22%2C%227_challenge%22%3A%22u5a6sv4urcnf4j15g2au%22%2C%223_method%22%3A%22custom_tab%22%7D&redirect_uri=fbconnect%3A%2F%2Fcct.com.instagram.android&response_type=token%2Csigned_request%2Cgraph_domain%2Cgranted_scopes&return_scopes=true')}>Log in with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewTen}>
        </View>
        <View style={styles.viewEleven}>
          <View>
            <Text style={styles.textSeven}>Dont have an account?</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.textEight}>Sign up.</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>

  )
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  view: {
    alignSelf: 'center'
  },
  textOne: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 100,
    color: '#000'
  },
  textInput: {
    height: 50,
    width: 300,
    borderWidth: 0.8,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 15,
    marginTop: 20,
    borderColor: 'gray'
  },
  imageOne: {
    height: 20,
    width: 20,
    marginTop: 15,
    marginLeft: 180
  },
  viewTwo: {
    flexDirection: 'row',
    height: 50,
    width: 300,
    borderWidth: 0.8,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: 'gray'
  },
  textInputOne: {
    marginLeft: 7,
  },
  viewTree: {
    height: 50,
    width: 300,
    backgroundColor: '#1a8cff',
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center'
  },
  textTwo: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600'
  },
  viewfour: {
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 16

  },
  textTree: {
    fontSize: 15,
  },
  textFour: {
    fontSize: 15,
    fontWeight: '600',
    color: '#00004d',
    marginLeft: 5
  },
  viewFive: {
    width: 150,
    borderTopWidth: 0.4,
    marginTop: 12,
    borderColor: 'gray'
  },
  viewSeven: {
    flexDirection: 'row',
    marginTop: 15,

    justifyContent: 'center'
  },
  textFive: {
    fontSize: 15,
    fontWeight: 'bold'

  },
  viewEight: {
    marginHorizontal: 7
  },
  viewNine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  textSix: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4da6ff'
  },
  viewTen: {
    borderBottomWidth: 0.6,
    marginTop: 120,

  },
  viewEleven: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  textSeven: {
    fontSize: 15
  },
  textEight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00004d',
    marginLeft: 5
  },
  viewTwelve: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  imageThree: {
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 5

  },
  textNine: {
    fontSize: 15
  },
  viewModal: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 20
  },
  modalView: {
    paddingHorizontal: 16
  },
  viewSelect: {
    padding: 10
  },
  textSelect: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000'
  },
  viewFist: {
    height: 50,
    borderTopWidth: 0.4,

  },
  searchView: {
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  searchImage: {
    marginTop: 10
  },
  input: {
    fontSize: 22,
    marginLeft: 5
  },
  line: {
    borderWidth: 0.8,

  }, lineOne: {
    paddingHorizontal: 10
  },
  viewLanguage: {
    // padding: 10,

  },
  textLanguage: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600'
  },
  languageText: {
    fontSize: 16,
    fontWeight: '500'
  },
  language: {
    padding: 10,
    marginBottom:20
  }
})