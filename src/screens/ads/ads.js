import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Ads = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.ad}>Ad preferences</Text>
            <TouchableOpacity>
            <Text style={styles.adTopic}>Ad topics</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.adTopic}>Data about your activity from partners</Text>
            </TouchableOpacity>
            <View style={styles.viewLine} />
            <Text style={styles.ad}>General info</Text>
            <TouchableOpacity>
            <Text style={styles.adTopic}>Ad interests</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.adTopic}>Ad activity</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.adTopic}>About Ads</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Ads;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ad: {
        fontSize:20,
       margin:10,
       marginLeft:16,     
      marginTop:20,
      color:'#000',
      fontWeight:'500'  
    },
    adTopic:{
        fontSize:18,
        color:'#000',
        margin:16
    },
    viewLine:{
        height:0.4,
        width:'100%',
        backgroundColor:'#666666',
        marginTop:10
    }
})