import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Image, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ViaEmail from './viaEmail';
import ViaPhone from './viaPhone';

const renderScene = SceneMap({
  first: ViaPhone,
  second: ViaEmail,
});

const SignUp = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'PHONE' },
    { key: 'second', title: 'EMAIL' },
  ]);

  return (
    <ScrollView contentContainerStyle = {styles.container}>
      <Image style = {styles.profileImage} source={require("../../assets/images/user.png")} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        
      />
    </ScrollView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  profileImage:{
    width: 100,
    height: 100,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 150,
    marginBottom: 20
  }
})