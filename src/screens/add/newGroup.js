import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const NewGroup = () => {
  const data = [

  ]
  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput style={styles.textinput}
          placeholder='Name group (optional)'
        />
      </View>
      <View style={styles.view}>

      </View>
      <View style={styles.viewSearch}>
        <Image resizeMode={'cover'} style={styles.search} source={require('../../assets/images/search.png.png')} />
        <TextInput style={styles.input}
          placeholder='Search'
        />
      </View>
      <View style={styles.viewLine} />
      <View style={styles.viewSuggested}>
        <Text style={styles.textSuggested}>Suggested</Text>
      </View>
      <View style={styles.mainRow}>
        <View style={styles.row}>
          <Image resizeMode={'cover'} style={styles.ankush} source={require('../../assets/images/ankush.jpg')} />
          <View style={styles.ankushView}>
            <Text style={styles.ankushText}>Ankush Singh</Text>
            <Text style={styles.singh}>_thakur_ankhush_singh</Text>
          </View>
        </View>
        <Image resizeMode={'cover'} style={styles.round} source={require('../../assets/images/round.png')} />
      </View>
    </View>
  )
}

export default NewGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  viewInput: {
    paddingHorizontal: 16,
    marginTop: 15,
  },
  textinput: {
    fontSize: 16,
    fontWeight: '500'
  },
  view: {
    height: 1,
    width: '100%',
    backgroundColor: '#0081fb',

  },
  viewLine: {
    height: 0.4,
    width: '100%',
    backgroundColor: '#cccccc',

  },
  viewSearch: {
    flexDirection: 'row',
    padding: 5
  },
  search: {
    marginTop: 10
  },
  input: {
    fontSize: 20,
    marginLeft: 15
  },
  viewSuggested: {
    marginTop: 10
  },
  textSuggested: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000'
  },
  ankush: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  row:{
    flexDirection:'row'
  },
  mainRow:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})