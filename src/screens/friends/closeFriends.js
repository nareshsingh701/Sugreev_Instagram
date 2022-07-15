import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

const CloseFriends = (props) => {
  const data = [
    {
      name: "ankush_singh",
      title: "Ankush Singh",
      image: require('../../assets/images/ankush.jpg'),
      icon: require('../../assets/images/round.png')
    },
    {
      name: "naresh_singh",
      title: "Naresh Singh",
      image: require('../../assets/images/jadu.jpg'),
      icon: require('../../assets/images/round.png')
    },
    {
      name: "atul_singh",
      title: "Thakur Singh",
      image: require('../../assets/images/chhotu.jpg'),
      icon: require('../../assets/images/round.png')
    },
    {
      name: "rinku_singh",
      title: "Rinku Singh",
      image: require('../../assets/images/rajsingh.jpg'),
      icon: require('../../assets/images/round.png')
    },
    {
      name: "jadu_singh",
      title: "Chauhan Singh",
      image: require('../../assets/images/jadu.jpg'),
      icon: require('../../assets/images/round.png')
    },
    {
      name: "bablu_singh",
      title: "Bablu Singh",
      image: require('../../assets/images/raj.jpg'),
      icon: require('../../assets/images/round.png')
    },
    {
      name: "anshika_singh",
      title: "Anshika Singh",
      image: require('../../assets/images/Anshika.jpg'),
      icon: require('../../assets/images/round.png')
    },
    {
      name: "sugreev_singh",
      title: "Raj Singh",
      image: require('../../assets/images/anshikasingh.jpg'),
      icon: require('../../assets/images/round.png')
    },
  ];
  const renderListData = (listData) => {
    const { item, index } = listData;
    return (
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageAnkush} source={item.image} />
            <View style={styles.viewAnkush}>
              <Text numberOfLines={1} style={styles.ankush}>{item.name}</Text>
              <Text numberOfLines={1} style={styles.singh}>{item.title}</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageRound} source={item.icon} />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <Text style={styles.weDont}>We don't send notifications when you edit your close friends list.<Text style={styles.how}>How it works</Text></Text>
        <View style={styles.mainSearch}>
          <View style={styles.row}>
            <Image resizeMode={'cover'} style={styles.imageSearch} source={require('../../assets/images/search.png.png')} />
            <TextInput style={styles.textInput}
              placeholderTextColor={'#666666'}
              placeholder='Search'
            />
          </View>
        </View>
      </View>
      <View style={styles.viewLine} />
      <ScrollView>
        <View style={styles.padding}>
          <Text style={styles.suggest}>Suggested</Text>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderListData}
          />
        </View>
      </ScrollView>
      <View style={styles.viewLine} />
      <View style={styles.padding}>
        <View style={styles.viewBlue}>
          <TouchableOpacity>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CloseFriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  weDont: {
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
    marginTop: 15
  },
  padding: {
    paddingHorizontal: 16
  },
  how: {
    fontSize: 18,
    color: '#000'
  },
  mainSearch: {
    height: 42,
    width: '100%',
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    marginTop: 15
  },
  row: {
    flexDirection: 'row',
  },
  imageSearch: {
    height: 22,
    width: 22,
    marginTop: 8,
    marginLeft: 16
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10,
  },
  viewLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#cccccc',
    marginTop: 10
  },
  suggest: {
    fontSize: 19,
    color: '#000',
    fontWeight: '500',
    marginTop: 15
  },
  imageAnkush: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  ankush: {
    fontSize: 18,
    color: '#000'
  },
  singh: {
    fontSize: 18,
    color: '#666666'
  },
  viewAnkush: {
    marginLeft: 15,
    width: 250
  },
  imageRound: {
    height: 35,
    width: 35,
    marginTop: 8
  },
  viewBlue: {
    height: 50,
    width: '100%',
    backgroundColor: '#0081fb',
    marginTop: 10,
    borderRadius: 10,
  },
  done: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 12,
  }
})