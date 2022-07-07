import { StyleSheet, Text, View, Image, TouchableOpacity,Linking } from 'react-native'
import React from 'react'

const Discover = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewLeft}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image resizeMode={'cover'} style={styles.leftImage} source={require('../../assets/images/left.png.png')} />
        </TouchableOpacity>
        <Text style={styles.textDiscover}>Discover People</Text>
      </View>
      <View style={styles.lineView} />
      <TouchableOpacity onPress={()=>Linking.openURL('https://m.facebook.com/login/device-based/password/?uid=100041143098031&next=https%3A%2F%2Fm.facebook.com%2Ffxreauth%2F%3Fapp_id%3D124024574287414%26etoken%3DAbgiJ6PvW7ppfVhr9wbeNJkVeJXZJ_VHHqJR_N8l4jrH1G5m5YUQfF9jodaA151ZUxQxMzHvUi8Q3g%26account_id%3D100041143098031%26force_logout%3D0&flow=fx_reauth&refsrc=deprecated&_rdr')}>
        <View style={styles.mainView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageFacebook} source={require('../../assets/images/facebook.png')} />
            <View style={styles.viewFacebook}>
              <Text style={styles.textConnect}>Connect to Facebook</Text>
              <Text style={styles.textFollow}>Follow your friends</Text>
            </View>
          </View>

          <TouchableOpacity onPress={()=>Linking.openURL('https://m.facebook.com/login/device-based/password/?uid=100041143098031&next=https%3A%2F%2Fm.facebook.com%2Ffxreauth%2F%3Fapp_id%3D124024574287414%26etoken%3DAbgiJ6PvW7ppfVhr9wbeNJkVeJXZJ_VHHqJR_N8l4jrH1G5m5YUQfF9jodaA151ZUxQxMzHvUi8Q3g%26account_id%3D100041143098031%26force_logout%3D0&flow=fx_reauth&refsrc=deprecated&_rdr')} >
            <View style={styles.connectView}>
              <Text style={styles.connectText}>Connect</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.viewLine} />
      <View style={styles.viewMain}>
        <TouchableOpacity>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageAnkush} source={require('../../assets/images/ankush.jpg')} />
            <View style={styles.viewConnect}>
              <Text numberOfLines={1} style={styles.textConnect}>ankush_singh</Text>
              <Text numberOfLines={1} style={styles.textFollow}>Thakur_ankush_singh</Text>
              <Text numberOfLines={1} style={styles.textAnkush}>New to instagram</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.followView}>
            <Text style={styles.connectText}>Follow</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageCross} source={require('../../assets/images/cross.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewMain}>
        <TouchableOpacity>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageAnkush} source={require('../../assets/images/rajsingh.jpg')} />
            <View style={styles.viewConnect}>
              <Text numberOfLines={1} style={styles.textConnect}>raj_singh</Text>
              <Text numberOfLines={1} style={styles.textFollow}>Thakur_sugreev_singh</Text>
              <Text numberOfLines={1} style={styles.textAnkush}>New to instagram</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.followView}>
            <Text style={styles.connectText}>Follow</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageCross} source={require('../../assets/images/cross.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewMain}>
        <TouchableOpacity>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageAnkush} source={require('../../assets/images/jadu.jpg')} />
            <View style={styles.viewConnect}>
              <Text numberOfLines={1} style={styles.textConnect}>naresh_singh</Text>
              <Text numberOfLines={1} style={styles.textFollow}>Thakur_naresh_singh</Text>
              <Text numberOfLines={1} style={styles.textAnkush}>New to instagram</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.followView}>
            <Text style={styles.connectText}>Follow</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageCross} source={require('../../assets/images/cross.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  viewLine: {
    borderWidth: 0.9,
    borderColor: '#6666'
  },
  lineView: {
    borderWidth: 0.9,
    borderColor: '#6666',
marginTop:2
  },
  imageFacebook: {
    height: 60,
    width: 60,

  },
  leftImage: {
    height: 30,
    width: 30
  },
  viewLeft: {
    flexDirection: 'row',
    padding:16
  },
  textDiscover: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000'
  },
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 16
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  viewConnect: {
    marginLeft: 10,
    marginTop: 5,
    width:'50%'
  },
  viewFacebook:{
    marginLeft: 10,
    marginTop: 5,
  },
  viewRow: {
    flexDirection: 'row',
  },
  textConnect: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000'
  },
  textFollow: {
    fontSize: 18,
    fontWeight: '400',
    color: '#666666'
  },
  connectView: {
    height: 31,
    width: 95,
    backgroundColor: '#1a75ff',
    borderRadius: 4,
    marginTop: 15
  },
  connectText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 2
  },
  imageAnkush: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginTop: 12,
    marginLeft: 5
  },
  followView: {
    height: 31,
    width: 80,
    backgroundColor: '#1a75ff',
    borderRadius: 4,
    marginTop: 15,

  },
  imageCross: {
    height: 15,
    width: 15,
    marginTop: 23
  },
  textAnkush: {
    fontSize: 16
  }
})