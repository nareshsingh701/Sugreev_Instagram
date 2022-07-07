import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const ViaFollowers = (props) => {
  const send=[
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Follow",
      suggest:"Suggested for you",
      icon:require('../../assets/images/crossGray.png')

    },
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Follow",
      suggest:"Suggested for you",
      icon:require('../../assets/images/crossGray.png')

    },
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Follow",
      suggest:"Suggested for you",
      icon:require('../../assets/images/crossGray.png')

    },
  ];
  const renderData=(listData)=>{
    const{item,index}=listData;
    return(
      <View style={styles.viewMain}>
      <TouchableOpacity style={styles.viewRow}>
        <Image resizeMode={'cover'} style={styles.imageRajni} source={item.image} />
        <View style={styles.viewJadu}>
          <Text numberOfLines={1} style={styles.textAnkush}>{item.name}</Text>
          <Text numberOfLines={1} style={styles.textSingh}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.textTitle}>{item.suggest}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.viewFollow}>
          <Text style={styles.textFollow}>{item.box}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image resizeMode={'cover'} style={styles.imageCross} source={item.icon} />
      </TouchableOpacity>
    </View>
    )
  }
  const data = [
    {
      name: "ankush_singh",
      title: "Thakur_ankush_singh",
      image: require('../../assets/images/ankush.jpg'),
      box: "Remove"
    },
    {
      name: "atul_singh",
      title: "Atul_singh",
      image: require('../../assets/images/chhotu.jpg'),
      box: "Remove"
    },
    {
      name: "rinku_singh",
      title: "Rinku_singh",
      image: require('../../assets/images/anshikasingh.jpg'),
      box: "Remove"
    },
    {
      name: "bablu_singh",
      title: "Thakur_bablu_singh",
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
      <ScrollView>
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
        <FlatList
          data={send}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderData}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity onPress={()=>props.navigation.navigate('Discover')}>
        <Text style={styles.textSee}>See all suggestions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ViaFollowers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 30
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
  imageRajni: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginTop: 10
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
    marginTop: 10,
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
    marginLeft: 15,
    width: '50%'
  },
  textSuggestion: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '500',
    color: '#000'
  },
  viewFollow: {
    height: 33,
    width: 85,
    backgroundColor: '#1a75ff',
    borderRadius: 4,
    marginRight: 10,
    marginTop: 20
  },
  textFollow: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 3,
    color: '#fff'
  },
  imageCross: {
    height: 16,
    width: 16,
    marginTop: 27
  },
  textSee:{
    fontSize:17,
    color:'#1a75ff',
    marginTop:20
  }
})