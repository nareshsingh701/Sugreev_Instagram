import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Login")
    }, 2000);
  }, [])


  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style = {styles.imageIcon} source={require("../../assets/images/instagram.png.png")} />
    </View>
  )
}

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageIcon: {
    height: 100,
    width: 100
  },
})