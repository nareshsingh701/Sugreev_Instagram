import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'

const Recent = (props) => {
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
    return(
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
      <View style={styles.viewContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack('Search')}>
          <Image resizeMode={'cover'} style={styles.ImageBack} source={require('../../assets/images/left.png.png')} />
        </TouchableOpacity>
        <View style={styles.viewInput}>
          <TextInput style={styles.textInput}
            placeholderTextColor={'#666666'}
            placeholder='Search'
          />
        </View>
      </View>
      <View style={styles.viewRecent}>
        <Text style={styles.textRecent}>Recent</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('SearchHistory')}>
          <Text style={styles.textSee}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderListData}
                    showsHorizontalScrollIndicator={false}
                    onRequestClose={() => {

                      setModalVisible(!modalVisible);
                  }}
                />
    </View>
  )
}

export default Recent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  viewInput: {
    height: 40,
    width: '85%',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginLeft: 20
  },
  viewContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  ImageBack: {
    height: 25,
    width: 25,
    marginTop: 5
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10,
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