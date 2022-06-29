import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

const Gallery = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.viewTwo}>
          <TouchableOpacity onPress={() => props.navigation.goBack('Instagram')}>
            <Image resizeMode={'cover'} style={styles.cross} source={require('../../assets/images/multiply.png')} />
          </TouchableOpacity>
          <Text style={styles.story}>Add to story</Text>
          <TouchableOpacity>
            <Image resizeMode={'cover'} style={styles.setting} source={require('../../assets/images/settings.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewThree}>
            <TouchableOpacity>
              <View style={styles.viewFour}>
                <Text style={styles.gallery}>Gallery</Text>
                <Image resizeMode={'cover'} style={styles.drop} source={require('../../assets/images/drop.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.viewSelect}>
              <Text style={styles.select}>Select</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.rowView}>
        <TouchableOpacity>
          <View style={styles.viewCamera}>
            <View style={styles.cameraView}>
              <Image resizeMode={'cover'} style={styles.camera} source={require('../../assets/images/camera.png')} />
            </View>
            <Text style={styles.textCamera}>Camera</Text>
          </View>

        </TouchableOpacity>
      </View>
      <View style={styles.viewAnshika}>
        <Image resizeMode={'cover'} style={styles.anshika} source={require('../../assets/images/Anshika.jpg')} />
      </View>
      <View style={styles.viewAnshika}>
        <Image resizeMode={'cover'} style={styles.anshika} source={require('../../assets/images/Anshika.jpg')} />
      </View>

    </View>
  )
}

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    height: 190,
    width: '100%',
    backgroundColor: '#000'
  },
  story: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600'
  },
  viewTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 60
  },
  cross: {
    height: 35,
    width: 35
  },
  setting: {
    height: 35,
    width: 35
  },
  gallery: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '600'
  },
  viewFour: {
    flexDirection: 'row',
    marginTop: 35,
    padding: 10
  },
  drop: {
    height: 16,
    width: 16,
    marginLeft: 6,
    marginTop: 12
  },
  viewThree: {
    // flexDirection: 'row'
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  select: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 6,
    alignSelf: 'center'
  },
  viewSelect: {
    height: 40,
    width: 80,
    backgroundColor: '#262626',
    borderRadius: 20,
    marginTop: 40,
    marginRight: 10
  },
  viewCamera: {
    height: 240,
    width: 140,
    backgroundColor: '#262626',

  },
  cameraView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 18
  },
  camera: {
    height: 32,
    width: 32
  },
  textCamera: {
    color: '#fff',
    marginBottom: 15,
    fontSize: 18,
    marginLeft: 12,
    fontWeight: '500'
  },
  viewAnshika: {
    height: 240,
    width: 140,
    flexDirection:'row'
  },
  anshika: {
    height: 240,
    width: 140
  },
  rowView: {
   // flexDirection: 'row'
  }
})