import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const SearchHistory = (props) => {
  const data = [
    {
      name: "naresh singh",
      title: "_thakur_naresh_singh",
      image: require('../../assets/images/jadu.jpg'),
      icon: require('../../assets/images/crossGray.png')
    },
    {
      name: "ankush singh",
      title: "_thakur_singh",
      image: require('../../assets/images/ankush.jpg'),
      icon: require('../../assets/images/crossGray.png')
    },
    {
      name: "rinku singh",
      title: "_rinku_singh",
      image: require('../../assets/images/sugreev.jpg'),
      icon: require('../../assets/images/crossGray.png')
    },
    {
      name: "atul singh",
      title: "_thakur_singh",
      image: require('../../assets/images/chhotu.jpg'),
      icon: require('../../assets/images/crossGray.png')
    },
    {
      name: "raj singh",
      title: "_thakur_singh",
      image: require('../../assets/images/rajsingh.jpg'),
      icon: require('../../assets/images/crossGray.png')
    },
  ];
  const renderListData = (listData) => {
    const { item, index } = listData;
    return (
      <TouchableOpacity>
        <View style={styles.viewImage}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageJadu} source={item.image} />
            <View style={styles.viewText}>
              <Text numberOfLines={1} style={styles.textNaresh}>{item.name}</Text>
              <Text numberOfLines={1} style={styles.textThakur}>{item.title}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image resizeMode={'cover'} style={styles.imageCross} source={item.icon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )


  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Only things you have searched for in the main search bar will appear here.</Text>
        <View style={styles.viewRecent}>
          <Text style={styles.textRecent}>Recent searches</Text>
          <TouchableOpacity>
            <Text style={styles.textSee}>Clear all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderListData}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  )
}

export default SearchHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#737373',
    marginTop: 15,
  },
  viewRecent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  textRecent: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000'
  },
  textSee: {
    fontSize: 18,
    color: '#4d79ff'
  },
  viewImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  viewRow: {
    flexDirection: 'row'
  },
  imageJadu: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  viewText: {
    marginLeft: 15
  }, textNaresh: {
    fontSize: 18,
    color: '#000',
    width:250,
  },
  textThakur: {
    fontSize: 16,
    color: '#666666'
  },
  imageCross: {
    marginTop: 12,
    height: 20,
    width: 20
  }
}) 
