import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ViaEmail from './viaEmail';
import ViaPhone from './viaPhone';

const SignUp = (props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'PHONE' },
    { key: 'second', title: 'EMAIL' },
  ]);

  const renderEmail = ()=>{
    return(
     <ViaEmail navigation = {props.navigation} />
    )
  }
  const renderPhone = ()=>{
    return(
     <ViaPhone  navigation = {props.navigation} />
    )
  }

  const renderScene = SceneMap({
    first: renderPhone,
    second:renderEmail,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.profileImage} source={require("../../assets/images/user.png")} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}

      />
      <View style={styles.viewFive} />
      <View style={styles.viewSix}>
        <Text style={styles.textThree}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> props.navigation.goBack()} >
          <Text style={styles.textFour}>Log in.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileImage: {
    width: 150,
    height: 150,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  viewFive: {
    borderWidth: 0.4,
    borderColor: 'gray',
    marginTop:100
  },
  viewSix: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15
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