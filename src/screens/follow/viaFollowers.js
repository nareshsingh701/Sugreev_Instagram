import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const ViaFollowers = () => {
  const data = [
    {
      name: "ankush_singh",
      title: "thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Remove"
    },
    {
      name: "atul_singh",
      title: "atul_singh",
      image: require('../../assets/images/chhotu.jpg'),
      box: "Remove"
    },
    {
      name: "rinku_singh",
      title: "rinku_singh",
      image: require('../../assets/images/anshikasingh.jpg'),
      box: "Remove"
    },
    {
      name: "bablu_singh",
      title: "thakur_bablu_singh",
      image: require('../../assets/images/jadu.jpg'),
      box: "Remove"
    },
  ];
  const renderListData = (listData) => {
    const { item, index } = listData;
    return (
      
      <View style={styles.viewMain}>
        <TouchableOpacity style={styles.viewRow}>
        
          <Image resizeMode={'cover'} style={styles.imageJadu} source={item.image} />
          <View style={styles.viewJadu}>
            <Text numberOfLines={1} style={styles.textAnkush}>{item.name}</Text>
            <Text numberOfLines={1} style={styles.textSingh}>{item.title}</Text>
          </View>
        
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.viewRemove}>
            <Text style={styles.textRemove}>{item.box}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewSearch}>
        <View style={styles.searchRow}>
          <Image resizeMode={'cover'} style={styles.imageSearch} source={require('../../assets/images/search.png.png')} />
          <TextInput style={styles.textInput}
            placeholderTextColor={'#595959'}
            placeholder='Search'
          />
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderListData}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.textSuggestion}>Suggestions for you</Text>
    </View>
  )
}

export default ViaFollowers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  viewSearch: {
    height: 40,
    width: '100%',
    backgroundColor: '#d9d9d9',
    marginTop: 10,
    borderRadius: 7
  },
  searchRow: {
    flexDirection: 'row'
  },
  imageSearch: {
    height: 20,
    width: 20,
    marginTop: 10,
    marginLeft: 15
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
  },
  imageJadu: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  viewRow: {
    flexDirection: "row"
  },
  viewRemove: {
    height: 33,
    width: 85,
marginTop:10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d9d9d9'
  },
  textRemove: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 3
  },
  textAnkush: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500'
  },
  textSingh: {
    fontSize: 18,
    color: '#666666'
  },
  viewJadu: {
    marginLeft: 15
  }
})