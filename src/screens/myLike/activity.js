import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

const Activity = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textActivity}>Activity</Text>
     <ScrollView> 
      <TouchableOpacity onPress={()=>props.navigation.navigate('FollowRequests')}>
        <View style={styles.viewRow}>
          <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/maleUser.png')} />
          <View style={styles.viewFollow}>
            <Text style={styles.followText}>Follow requests</Text>
            <Text style={styles.textDay}>Approve or ignore requests</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.textWeek}>This Week</Text>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/jadu.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>naresh_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>2d</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/ankush.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>ankush_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>4d</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/chhotu.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>atul_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>5d</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Text style={styles.textWeek}>This Month</Text>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/rajni.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>anshika_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>1w</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/rajsingh.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>raj_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>3w</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/pravesh.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>pravesh_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>4w</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Text style={styles.textWeek}>Earlier</Text>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/sugreev.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>sugreev_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>5w</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/jadu.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>jadu_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>6w</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/rani.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>rani_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>6w</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Text style={styles.textWeek}>Suggestions for you</Text>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/party.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>rajni_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>5d</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>

            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/jadu.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>naresh_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>5d</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.viewRow}>
            <Image resizeMode={'cover'} style={styles.followImage} source={require('../../assets/images/rajsingh.jpg')} />
            <View style={styles.viewNaresh}>
              <Text style={styles.textNaresh}>anshu_singh</Text>
              <Text style={styles.textFollow}>started following you. <Text style={styles.textDay}>5d</Text></Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.follow}>
              <Text style={styles.followBlue}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Discover')}>
        <Text style={styles.seeAll}>See all suggestions</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom:40
  },
  textActivity: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000'
  },
  followImage: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  viewRow: {
    flexDirection: 'row',
    marginTop: 15
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  textNaresh: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700'
  },
  textFollow: {
    fontSize: 16,
    color: '#000000',  
  },
  textDay: {
    fontSize: 16,
    color: 'gray'
  },
  viewFollow: {
    marginLeft: 15
  },
  followText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500'
  },
  viewNaresh: {
    marginLeft: 15
  },
  follow: {
    height: 36,
    width: 90,
    backgroundColor: '#1a75ff',
    borderRadius: 18,
    marginTop: 27
  },
  followBlue: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 6,
    fontWeight: '600'
  },
  textWeek:{
    fontSize:20,
    color:'#000',
    fontWeight:'600',
    marginTop:15
  },
  seeAll:{
    fontSize:18,
    marginTop:20,
    color:'#1a75ff'
  }
})