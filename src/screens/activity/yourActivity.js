import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const YourActivity = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.place}>One place to manage your activity</Text>
      <Text style={styles.added}>We've added more tools for you to review and manage your photos, videos, account and activity on Instagram.</Text>
      <View style={styles.viewLine} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTime} source={require('../../assets/images/time.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Time spent</Text>
              <Text style={styles.see}>See how much time you usually spend on Instagram each day.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTimeOne} source={require('../../assets/images/gallery.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Photos and videos</Text>
              <Text style={styles.see}>View, archive or delete photo and videos you've shared.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMoreOne} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTime} source={require('../../assets/images/leftRight.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Interactions</Text>
              <Text style={styles.see}>Review and delete likes, comments, and your other interactions.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTime} source={require('../../assets/images/book.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Account history</Text>
              <Text style={styles.see}>Review changes you've made to your account since you created it.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTime} source={require('../../assets/images/search.png.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Recent searches</Text>
              <Text style={styles.see}>Review things you've searched for on Instagram and clear your search history.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMore} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTimeOne} source={require('../../assets/images/link.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Likes you've visited</Text>
              <Text style={styles.see}>See which links you've visited recently.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMoreOne} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTimeOne} source={require('../../assets/images/time.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Archived</Text>
              <Text style={styles.see}>View and manage content you've archived.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMoreOne} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTimeOne} source={require('../../assets/images/deleteSmall.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.time}>Recently deleted</Text>
              <Text style={styles.see}>View and manage content you'recently deleted.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMoreOne} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      <TouchableOpacity>
        <View style={styles.viewMainRow}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.imageTimeTwo} source={require('../../assets/images/downloadSmall.png')} />
            <View style={styles.timeSpent}>
              <Text style={styles.timeOne}>Download your information</Text>
              <Text style={styles.see}>Download a copy of the information you've shared with Instagram.</Text>
            </View>
          </View>
          <Image resizeMode={'cover'} style={styles.imageMoreTwo} source={require('../../assets/images/moreThen.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.viewLineOne} />
      </ScrollView>
    </View>
  )
}

export default YourActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:30
  },
  place: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginHorizontal: 30,
    textAlign: 'center',
    marginTop: 15
  },
  added: {
    fontSize: 18,
    color: '#666666',
    marginHorizontal: 45,
    textAlign: 'center',
    marginTop: 10
  },
  viewLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#cccccc',
    marginTop: 15
  },
  viewRow: {
    flexDirection: 'row',

  },
  viewMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10
  },
  time: {
    fontSize: 20,
    color: '#000'
  },
  timeOne:{
    fontSize: 20,
    color: '#000',
    width:220
  },
  see: {
    fontSize: 18,
    width: 250,
    color: '#666666'
  },
  imageTime: {
    height: 35,
    width: 35,
    marginTop: 25
  },
  imageTimeTwo:{
    height: 35,
    width: 35,
    marginTop: 35
  },
  timeSpent: {
    marginLeft: 25
  },
  imageMore: {
    marginTop: 35
  },
  viewLineOne: {
    height: 1,
    width: '100%',
    backgroundColor: '#cccccc',
    marginTop: 10
  },
  imageTimeOne:{
    height: 35,
    width: 35,
    marginTop:15
  },
  imageMoreOne:{
   marginTop:20 
  },
  imageMoreTwo:{
    marginTop:40
  }
})